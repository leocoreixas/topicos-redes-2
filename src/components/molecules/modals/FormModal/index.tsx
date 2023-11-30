import { FormEvent, ReactElement } from 'react';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';

import BaseBtn from '../../../atoms/buttons/BaseBtn/index';
import Typography from '../../../atoms/Typography';
import Icon from '../../../atoms/icon';
export interface IFormModal {
    isOpen: boolean
    toggle: (value: boolean) => void,
    title?: string,
    formComponent: ReactElement,
    submitButtonText: string,
    onSubmit: Function,
    isLoading: boolean,
    disableSubmition?: boolean,
    className?: string,
    customButton?: ReactElement,
    size?: 'lg'
}

const FormModal = (props: IFormModal) => {
    const { 
        isOpen,
        toggle, 
        title, 
        formComponent, 
        submitButtonText, 
        isLoading, 
        onSubmit, 
        disableSubmition
    } = props;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit();
    }

    return (
        <Dialog 
            open={isOpen} 
            handler={toggle} 
            className='rounded-2xl'     
        >
            <DialogHeader className='flex items-center justify-between px-8 pt-8'>
                {title && (
                    <Typography variant='h6' tag='h6'>{title}</Typography>
                )}
                <span
                    className="cursor-pointer [&>svg]:hover:fill-gray-700"
                    onClick={() => toggle(false)}
                >
                    <Icon name="cross" size={16} />
                </span>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <DialogBody className='px-8'>
                    {formComponent}
                </DialogBody>
                <DialogFooter className='px-8 pb-8'>
                    <BaseBtn
                        color='secondary'
                        type='submit'
                        disabled={disableSubmition}
                        isLoading={isLoading}
                        maxWidth='136px'
                    >
                        {submitButtonText}
                    </BaseBtn>
                </DialogFooter>
            </form>
        </Dialog>
)}

export default FormModal;