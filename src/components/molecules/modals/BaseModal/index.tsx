import { MouseEventHandler, ReactElement } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

import Typography from "../../../atoms/Typography";
import Icon from "../../../atoms/icon";
import BaseBtn from '../../../atoms/buttons/BaseBtn/index';
import classNames from "classnames";


interface IProps {
    toggle: (value: boolean) => void,
    isOpen: boolean,
    title: string,
    className?: string,
    confirmButtonText: string,
    onConfirm: MouseEventHandler,
    is_loading?: boolean,
    children?: ReactElement,
}

const BaseModal = (props: IProps) => {
    const {
        title,
        confirmButtonText,
        className,
        is_loading,
        onConfirm,
        toggle,
        isOpen,
        children
    } = props;

    return (
        <Dialog
            open={isOpen} 
            handler={toggle}
            className={classNames(
                `${className} lg:!max-w-md lg:!min-w-[320px] md:!max-w-xs md:!min-w-[320px] sm:!max-w-xs sm:!min-w-[320px]`,
                className
            )}
        >
            <DialogBody className="px-10 py-6">
                <span
                    className="cursor-pointer absolute top-0 right-0 mr-4 mt-4 [&>svg]:hover:fill-gray-700 transition"
                    onClick={() => toggle(false)}
                >
                    <Icon name="cross" size={16} />
                </span>
 
                <Typography align="center" tag="h6" variant="h6" className="mt-4 mb-2">
                    {title}
                </Typography>

                <div className="mb-4 p-4 flex justify-center items-center">
                    {children}
                </div>
                    
                <div className="flex justify-center items-center gap-2">
                        <BaseBtn
                            color="secondary"
                            onClick={onConfirm}
                            isLoading={is_loading}
                            size="md"
                            className={`text-label-md`}
                        >
                            {confirmButtonText}
                        </BaseBtn>
                    </div>

                    
           
            </DialogBody>
        </Dialog>
    )
};

export default BaseModal;
