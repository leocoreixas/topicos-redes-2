import Icon from '../../../atoms/icon';
import Typography from '../../../atoms/Typography';
import { TIconName } from '../../../../types';

interface IProps {
    title: string;
    value: string;
    icon: TIconName;
    className?: string;
}

function BaseCard(props: IProps) {
    const { title, value, icon, className } = props;

    return (
        <>
            <div className={` bg-white h-[136px] p-4 flex flex-col justify-between rounded-2xl items-start ${className}`}>
                <div className='bg-secondary-m h-[40px] w-[40px] p-2 rounded-xl flex items-start'>
                    <Icon name={icon} size={24} color="white" />
                </div>

                <div className="flex justify-between items-center self-stretch">
                    <Typography tag="label" variant="label-lg" color='gray-800'>
                        {title}
                    </Typography>
                    <Typography tag="h6" variant="h6" color="secondary-l">
                        {value}
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default BaseCard;