import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react"
import BaseBtn from "../atoms/buttons/BaseBtn";
import TextInput from "../atoms/forms/TextInput";


const AddBalanceDialog =  (
  {
  open,
  handleClose,
  handleAddBalance,
  handleConfirmClose,
  handleAddConfirmed,
  newBalanceInput,
  isAddingBalance,
  onNewBalanceInputChange, 
}
) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onNewBalanceInputChange(newValue); 
  };

  return (
    <Dialog
      open={open}
      handler={handleClose}
    >
      <DialogHeader>Add Balance</DialogHeader>
      <DialogBody>
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
          onClick={handleAddConfirmed}
        >
          Add
        </BaseBtn>
      </DialogFooter>
    </Dialog>
  );
};

export default AddBalanceDialog;
