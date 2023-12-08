import { useNavigate } from "react-router-dom";
import BaseBtn from "./../../../components/atoms/buttons/BaseBtn";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
      typeof window !== "undefined" &&
      (window as any).ethereum !== "undefined"
    ) {
      let accounts = null;
      accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      localStorage.setItem("auth", "token");
      if (accounts && accounts.length > 0) {
        localStorage.setItem("balance", "0");
        localStorage.setItem("address", accounts[0]);
        setAccount(accounts[0]);
        navigate("/dashboard");
      }
    }
  };

  return (
    <section className="h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container mx-auto p-10 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-lg dark:bg-neutral-800 rounded-lg p-8 lg:p-12 w-full">
          <div className="flex flex-col justify-center items-center lg:border-r lg:border-neutral-300 lg:pr-8">
            <img className="" src="src/assets/images/metamask.png" alt="logo" />
            <BaseBtn
              onClick={handleSubmit}
              className="w-full relative"
              color="primary"
              variant="contained"
            >
              {account && account.length > 0
                ? "Conectado com Metamask"
                : "Conectar com Metamask"}
            </BaseBtn>
          </div>

          <div className="flex flex-col justify-center items-center lg:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-6 lg:p-12 rounded-lg">
            <h4 className="mb-6 text-xl font-semibold text-center">
              RALLY DA SORTE
            </h4>
            <p className="text-sm text-center">
              Este é um jogo de sorte, onde você pode ganhar prêmios em
              criptomoedas. Para jogar, você precisa conectar sua carteira
              Metamask.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
