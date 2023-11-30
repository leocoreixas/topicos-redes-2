import { MouseEventHandler, ReactElement } from "react";
import { Modal, ModalBody, ModalHeader, ModalProps } from "reactstrap";

import './style.scss';

interface IProps extends ModalProps {
    title?: string,
    modal_content: ReactElement,
    className?: string,
    toggle: MouseEventHandler<any> | undefined
}

const DetailModal = (props: IProps) => {
    const { title, modal_content, className, ...modal_props } = props;

    return (
        <Modal
            {...modal_props}
            className={`detail-modal${className ? ` ${className}` : ''}`}
        >
            {title && (
                <ModalHeader toggle={modal_props.toggle}>
                    {title}
                </ModalHeader>
            )}
            <ModalBody>
                {modal_content}
            </ModalBody>
        </Modal>
    )
}

export default DetailModal