import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import BaseBtn from "../atoms/buttons/BaseBtn";
import Typography from "../atoms/Typography";

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

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onNewBalanceInputChange(newValue); 
  };

  return (
    <Dialog
      open={open}
      handler={handleClose}
    >
      <DialogHeader>Withdraw Balance</DialogHeader>
      <DialogBody>
      <Typography tag={"p"} variant={"body-lg"} className="mb-4">
          You are about to withdraw {newBalanceInput} ETH from your balance.
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
        <BaseBtn
          color="primary"
          onClick={openVoucherList}
          className="mr-4"
        >
          Confirm
        </BaseBtn>
      
      </DialogFooter>
    </Dialog>
  );
};

export default WithdrawDialog;
