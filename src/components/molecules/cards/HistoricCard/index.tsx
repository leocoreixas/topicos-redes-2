import Typography from '../../../atoms/Typography';
import classNames from 'classnames';

interface IProps {
    createdAt: string;
    car: any;
    value: string;
    status: boolean;
    className?: string;
}

function HistoricCard(props: IProps) {
    const { createdAt, car, value, status, className } = props;

    const classes = {
        variants: {
            base: {
                victory: 'bg-green-200',
                defeat: 'bg-red-200',
            },
            border: {
                victory: 'border-green-300',
                defeat: 'border-red-300',
            },
            status_text: {
                victory: 'text-green-500',
                defeat: 'text-red-500',
            }
        },
    }

    return (
        <>
        
            <div className={classNames(
                'p-4 rounded-2xl',
                {[classes.variants.base.victory]: status},
                {[classes.variants.base.defeat]: !status},
                className
            )}>
                <div className={classNames(
                    'border-b pb-1',
                    {[classes.variants.border.victory]: status},
                    {[classes.variants.border.defeat]: !status},
                     )}>
                    <Typography tag="label" variant="body-lg" color='gray-800'>
                        Corrida realizada em: {createdAt}
                    </Typography>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div>
                        <Typography tag="label" variant="h4" className={classNames(
                            {[classes.variants.status_text.victory]: status},
                            {[classes.variants.status_text.defeat]: !status},
                        )}>
                            {status ? 'VITÓRIA' : 'DERROTA'}
                        </Typography>
                    </div>
                    <div>
                        <p>Carro Utilizado</p>
                        <Typography tag="label" variant="subtitle" color='gray-800'>
                            {car}
                        </Typography>
                    </div>
                    <div>
                        <p>{status ? 'Valor ganho' : 'Valor perdido'}</p>
                        <Typography tag="label" variant="subtitle" color='gray-800'>
                            {value} ETH
                        </Typography>
                    </div>
                        
                 
                  
                </div>
               
                
               
               
              
            </div>
        </>
    );
}

export default HistoricCard;