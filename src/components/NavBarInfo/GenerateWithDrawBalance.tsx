import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react"
import BaseBtn from "../atoms/buttons/BaseBtn";
import Typography from "../atoms/Typography";
import TextInput from "../atoms/forms/TextInput";

const GenerateWithdrawDialog = ({
  open,
  handleClose,
  handleWithdrawBalance,
  handleConfirmClose,
  newBalanceInput,
  isAddingBalance,
  onNewBalanceInputChange, 
}) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onNewBalanceInputChange(newValue); 
  };

  return (
    <Dialog
      open={open}
      handler={handleClose}
    >
      <DialogHeader>Generate Balance to Withdraw</DialogHeader>
      <DialogBody>
        <Typography tag={"p"} variant={"body-lg"} className="mb-4">
          Enter the amount in Ethereum to discount from your balance:
        </Typography>
        <TextInput
          label="Amount"
          type="number"
          value={newBalanceInput}
          onChange={handleInputChange}
          className="mb-4 w-full"
        />
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
          onClick={handleWithdrawBalance}
          className="mr-4"
        >
          Confirm
        </BaseBtn>
      
      </DialogFooter>
    </Dialog>
  );
};

export default GenerateWithdrawDialog;

