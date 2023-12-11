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
    description: string | ReactElement,
    className?: string,
    confirmButtonText: string,
    cancelButtonText?: string,
    onCancel?: MouseEventHandler,
    onConfirm: MouseEventHandler,
    is_loading?: boolean,
    is_cancel_loading?: boolean,
    customIcon?: ReactElement,
}

const AlertModal = (props: IProps) => {
    const {
        title,
        description,
        confirmButtonText,
        cancelButtonText,
        className,
        is_loading,
        is_cancel_loading,
        onCancel,
        onConfirm,
        customIcon,
        toggle,
        isOpen
    } = props;

    return (
        <Dialog
            open={isOpen} 
            handler={toggle}
            className={classNames(
                `${className} lg:!max-w-xs lg:!min-w-[320px] md:!max-w-xs md:!min-w-[320px] sm:!max-w-xs sm:!min-w-[320px]`,
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

                <div className="flex flex-col items-center justify-center gap-1">
                    {customIcon 
                        ? customIcon
                        : (
                            <Icon 
                                name="warning" 
                                color="warning" 
                                size={40} 
                            />
                        )
                    }
                    <Typography
                        tag="p"
                        variant="label-lg"
                        color="gray-900"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        tag={"p"}
                        variant="body-sm"
                        color="gray-700"
                        align="center"
                        className="mb-4"
                    >
                        {description}
                    </Typography>
                </div>
                <div className="flex justify-center">
                    {onCancel && (
                        <div className="mr-2">
                            <BaseBtn
                                variant="outline"
                                color="error"
                                onClick={onCancel}
                                size="md"
                                isLoading={is_cancel_loading}
                                className=" mb-lg-0 mb-xsm text-label-md"
                            >
                                {cancelButtonText}
                            </BaseBtn>
                        </div>
                    )}
                    <div>
                        <BaseBtn
                            color="secondary"
                            onClick={onConfirm}
                            isLoading={is_loading}
                            disabled={is_loading}
                            size="md"
                            className={`text-label-md`}
                        >
                            {confirmButtonText}
                        </BaseBtn>
                    </div>
                </div>  
            </DialogBody>
        </Dialog>
    )
};

export default AlertModal;
