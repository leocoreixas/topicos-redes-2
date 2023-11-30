
import BaseBtn from './../../atoms/buttons/BaseBtn';
import Typography from './../../atoms/Typography';

interface IProps {
    title: string,
    description: string,
    buttonText?: string,
    className?: string
    onClick?: () => void
}

function EmptyData(props: IProps) {
    const { title, description, buttonText, onClick } = props;
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <Typography tag='label' variant='label-lg' color='black' className='font-medium'>{title}</Typography>
                    <Typography tag='label' variant='body-sm' color='gray-500'>{description}</Typography>
                </div>
                {buttonText &&  
                <div>
                    <BaseBtn
                        color='secondary'
                        variant='contained'
                        onClick={onClick}
                    >
                        {buttonText}
                    </BaseBtn>
                </div>
                }
            </div>
        </>
    );
}

export default EmptyData;