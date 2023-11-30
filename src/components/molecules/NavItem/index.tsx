
import Icon from '../../atoms/icon/index';
import Typography from '../../atoms/Typography';
import { TIconName } from '../../../types';
import { TColors } from '../../../types';
interface IProps {
    icon: TIconName;
    color?: TColors;
    children?: React.ReactNode;
    className?: string;
}

function NavItem(props: IProps) {
    const { icon, color = 'gray-400', children, className } = props;

    return (
        <div className={`flex gap-2 items-center cursor-pointer ${className}`}>
            <Icon name={icon} color={color} />
            <Typography className='cursor-pointer' tag='label' variant='label-lg' color={color}>{children}</Typography>
        </div>
    );
}

export default NavItem;