import Typography from "../../atoms/Typography";
import classNames from "classnames";

interface IProps {
    title: string;
    active?: boolean;
    stageNumber: number;
    className?: string;
}

function WizardItem(props: IProps) {
    const { title, active, stageNumber, className } = props;


    return (
        <>
            <div className={classNames(
                'flex gap-2 items-center',
                className
            )}
            >

                <div className='border-2 border-solid border-secondary-m h-8 w-8 rounded-lg flex justify-center items-center'>
                    <Typography color="secondary-m" variant="label-lg" tag='p'>{stageNumber}</Typography>
                </div>
                <Typography color={active ? 'secondary-m' : 'black'} variant="label-lg" tag='p'>{title}</Typography>
            </div>
        </>
    );
}

export default WizardItem;