import Typography from '../../../atoms/Typography';
import classNames from 'classnames';

interface IProps {
    title: string;
    strength: string;
    speed: string;
    image: string;
    rarity: string;
    className?: string;    
}

function CarCard(props: IProps) {
    const { title, strength, speed, rarity, image, className } = props;

    const classes = {
        variants: {
            'yellow': 'bg-yellow-200',
            'blue': 'bg-blue-200',
            'gray': 'bg-gray-200',
        }
    }

    return (
        <>
            <div className={classNames(
                'w-[300px] p-4 flex flex-col justify-center rounded-2xl',
                {[classes.variants.yellow]: rarity === 'legendary'},
                {[classes.variants.blue]: rarity === 'rare'},
                {[classes.variants.gray]: rarity === 'common'},
                className
            )}>

                

                <Typography tag="label" variant="h6" color='gray-800'>
                    {title}
                </Typography>
                <div className='h-[180px] flex justify-center rounded-xl p-[2px] mt-4'>
                    <img className='w-full rounded-xl' src={`../../../src/assets/images/${image}.png`} alt="car" />
                </div>
                    <div>
                        <div  className="flex justify-between items-center self-stretch mt-4">
                            <Typography tag="label" variant="label-lg" color='gray-800'>
                                Força
                            </Typography>
                            <Typography tag="h6" variant="h6">
                                {strength}
                            </Typography>
                        </div>
                       <div className="flex justify-between items-center self-stretch mt-4">
                        <Typography tag="label" variant="label-lg" color='gray-800'>
                                Velocidade
                            </Typography>
                            <Typography tag="h6" variant="h6">
                                {speed}
                            </Typography>
                       </div>  
                    </div>
                    
              
            </div>
        </>
    );
}

export default CarCard;