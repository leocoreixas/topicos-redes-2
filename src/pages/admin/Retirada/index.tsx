import { useState } from "react";
import Typography from "../../../components/atoms/Typography";
import BaseBtn from "../../../components/atoms/buttons/BaseBtn";
import Icon from "../../../components/atoms/icon";
import AlertModal from "../../../components/molecules/modals/AlertModal";

function Retirada() {
  const divSuperiorHeight = 137;
  const [isLoading, setIsLoading] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleRetirada = () => {
    setIsLoading(true);
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setIsLoading(false);
      setConfirmModalOpen(true);
    });
  };

  return (
    <>
      <div
        style={{ height: `calc(100vh - ${divSuperiorHeight}px)` }}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <Typography tag="p" variant="body-lg">
          Saldo disponível para retirada:
        </Typography>
        <div className="flex justify-center items-center border border-gray-300 rounded-full p-2">
          <Typography tag="p" variant="label-md">
            0.1 ETH
          </Typography>
          <Icon name="ethereum" />
        </div>
        <BaseBtn
          color="secondary"
          size="lg"
          className="mb-xsm text-body-lg"
          isLoading={isLoading}
          onClick={handleRetirada}
        >
          Retirar
        </BaseBtn>
        <AlertModal
          isOpen={confirmModalOpen}
          toggle={setConfirmModalOpen}
          title="Valor retirado com sucesso!"
          description="O valor foi enviado para sua carteira."
          confirmButtonText="Confirmar"
          onConfirm={() => setConfirmModalOpen(false)}
          customIcon={<Icon name="check" color="success" size={40} />}
        />
      </div>
    </>
  );
}

export default Retirada;
