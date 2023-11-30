
import Avatar from "../Avatar";
import Typography from "../Typography";
import Icon from "../icon";

type TStatus = 'error' | 'success' | 'info' | 'warning'

interface IProps {
    title: string
    message: string
    status?: TStatus
}

const Toast = (props: IProps) => {
    const { title, message, status = 'info' } = props;

    const renderIcon = (status: TStatus) => {
        switch (status) {
            case 'info': return (
                <Avatar
                    size={40}
                    variant="square"
                    bgColor="cyan"
                    content={(
                        <Icon 
                            name='fill_info' 
                            color="white" 
                            size={24} 
                        />
                    )}
                />
            )
            case 'success': return (
                <Avatar
                    size={40}
                    variant="square"
                    bgColor="success"
                    content={(
                        <Icon 
                            name='fill_check' 
                            color="white" 
                            size={24} 
                        />
                    )}
                />
            )
            case 'warning': return (
                <Avatar
                    size={40}
                    variant="square"
                    bgColor="warning"
                    content={(
                        <Icon 
                            name='fill_warning' 
                            color="white" 
                            size={24} 
                        />
                    )}
                />
            )
            case 'error': return (
                <Avatar
                    size={40}
                    variant="square"
                    bgColor="error"
                    content={(
                        <Icon 
                            name='fill_error' 
                            color="white" 
                            size={24} 
                        />
                    )}
                />
            )
        }
    }

    return (
        <div className="d-flex align-items-center">
            {renderIcon(status)}
            <div className="ml-xsm">
                <Typography
                    tag={'h4'}
                    variant="body-md"
                    fweight="medium"
                    color='gray-900'
                >
                    {title}
                </Typography>
                {message && (
                    <Typography 
                        tag={'p'} 
                        color="gray-900" 
                        variant="body-md"
                    >
                        {message}
                    </Typography>
                )}
            </div>
        </div>
    )
}

export default Toast;