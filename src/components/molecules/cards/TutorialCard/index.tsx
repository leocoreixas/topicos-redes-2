import Typography from '../../../atoms/Typography';
import classNames from 'classnames';

interface IProps {
    title: string;
    description: string;
    className?: string;
}

function TutorialCard(props: IProps) {
    const { title, description, className } = props;

    return (
        <>
            <div className={classNames(
                    'p-8 rounded-2xl border border-gray-200 flex flex-col gap-2 bg-primary-l w-[350px]',
                    className
                )}>
                <div>
                    <Typography className="text-lg font-bold mb-2" color='primary-m' variant="h6" tag={'symbol'}>{title}</Typography>
                </div>
                <Typography className="text-sm font-light" variant="label-lg" tag={'symbol'}>{description}</Typography>
            </div>
           
        </>
    );
}

export default TutorialCard;