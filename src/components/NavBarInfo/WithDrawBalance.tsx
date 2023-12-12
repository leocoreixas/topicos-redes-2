import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import BaseBtn from "../atoms/buttons/BaseBtn";
import Typography from "../atoms/Typography";
import { useVouchersQuery, useVoucherQuery } from "../cartesi/helpers/generated/index";
import { useRollups } from "../helpers/useRollups";
import { Vouchers } from "../cartesi/withdraw";

const WithdrawDialog = ({
  open,
  handleClose,
  handleWithdrawBalance,
  handleConfirmClose,
  newBalanceInput,
  isAddingBalance,
  onNewBalanceInputChange, 
  openVoucherList
}) => {
  const dappAddress = import.meta.env.NEXT_PUBLIC_LOCALHOST_DAPP_ADDRESS;
  const [balanceInput, setBalanceInput] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onNewBalanceInputChange(newValue); 
  };
  return (
    <Dialog
      open={open}
      handler={handleClose}
    >
      <DialogHeader>Withdraw</DialogHeader>
      <DialogBody>
      <Typography tag={"p"} variant={"body-lg"} className="mb-4">
          Vouchers disponíveis para executar:
        </Typography>
        
      </DialogBody>
      <DialogFooter>
        <BaseBtn
          color="secondary"
          onClick={handleClose}
          className="mr-4"
        >
          Cancel
        </BaseBtn>
        <Vouchers />
      
      </DialogFooter>
    </Dialog>
  );
};

export default WithdrawDialog;
