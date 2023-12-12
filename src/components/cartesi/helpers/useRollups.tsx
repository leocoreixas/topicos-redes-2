import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSetChain, useWallets } from "@web3-onboard/react";

import { ConnectedChain } from "@web3-onboard/core";

import configFile from "./config.json";
import { JsonRpcSigner } from "@ethersproject/providers";

const config: any = configFile;


export interface RollupsContracts {
    dappContract: any;
    signer: any;
    realyContract: any;
    inputContract: any;
    etherPortalContract: any;
    erc20PortalContract: any;
    erc721PortalContract: any;
}

import { init } from "@web3-onboard/react";
import {
    CartesiDApp__factory,
    InputBox__factory,
    EtherPortal__factory,
    ERC20Portal__factory,
    ERC721Portal__factory,
    DAppAddressRelay__factory,
} from "@cartesi/rollups/";
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'

const injected = injectedModule()


const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com'
}

const trezor = trezorModule(trezorOptions)

const web3Onboard = init({
  wallets: [
    trezor,
    injected,
  ],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    }
  ],
  appMetadata: {
    name: 'Blocknative',
    icon: '<svg><svg/>',
    description: 'Demo app for Onboard V2',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ]
  }
})

export const useRollups = (dAddress: string): RollupsContracts | undefined => {
    const [contracts, setContracts] = useState<RollupsContracts | undefined>();
    const [{ connectedChain }] = useSetChain();
    const [connectedWallet] = useWallets();
    const [dappAddress] = useState<string>(dAddress);

    useEffect(() => {
        const connect = async (
            chain: ConnectedChain
            ): Promise<RollupsContracts> => {
            const provider = new (ethers as any).provider.Web3Provider(
                connectedWallet.provider
            );
            const signer = provider.getSigner();

            let dappRelayAddress = "";
            if(config[chain.id]?.DAppRelayAddress) {
                dappRelayAddress = config[chain.id].DAppRelayAddress;
            } else {
                console.error(`No dapp relay address address defined for chain ${chain.id}`);
            }

            let inputBoxAddress = "";
            if(config[chain.id]?.InputBoxAddress) {
                inputBoxAddress = config[chain.id].InputBoxAddress;
            } else {
                console.error(`No input box address address defined for chain ${chain.id}`);
            }

            let etherPortalAddress = "";
            if(config[chain.id]?.EtherPortalAddress) {
                etherPortalAddress = config[chain.id].EtherPortalAddress;
            } else {
                console.error(`No ether portal address address defined for chain ${chain.id}`);
            }

            let erc20PortalAddress = "";
            if(config[chain.id]?.Erc20PortalAddress) {
                erc20PortalAddress = config[chain.id].Erc20PortalAddress;
            } else {
                console.error(`No erc20 portal address address defined for chain ${chain.id}`);
                alert(`No box erc20 portal address defined for chain ${chain.id}`);
            }

            let erc721PortalAddress = "";
            if(config[chain.id]?.Erc721PortalAddress) {
                erc721PortalAddress = config[chain.id].Erc721PortalAddress;
            } else {
                console.error(`No erc721 portal address address defined for chain ${chain.id}`);
                alert(`No box erc721 portal address defined for chain ${chain.id}`);
            }
            // dapp contract 
            const dappContract = CartesiDApp__factory.connect(dappAddress, signer);

            // relay contract
            const realyContract = DAppAddressRelay__factory.connect(dappRelayAddress, signer);

            // input contract
            const inputContract = InputBox__factory.connect(inputBoxAddress, signer);
            
            // portals contracts
            const etherPortalContract = EtherPortal__factory.connect(etherPortalAddress, signer);

            const erc20PortalContract = ERC20Portal__factory.connect(erc20PortalAddress, signer);

            const erc721PortalContract = ERC721Portal__factory.connect(erc721PortalAddress, signer);

            return {
                dappContract,
                signer,
                realyContract,
                inputContract,
                etherPortalContract,
                erc20PortalContract,
                erc721PortalContract,
            };
        };
        if (connectedWallet?.provider && connectedChain) {
            connect(connectedChain).then((contracts) => {
                setContracts(contracts);
            });
        }
    }, [connectedWallet, connectedChain, dappAddress]);
    return contracts;
};