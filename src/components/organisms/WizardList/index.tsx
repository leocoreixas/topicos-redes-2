import classNames from "classnames";
import Icon from "../../atoms/icon";
import WizardItem from "../../molecules/WizardItem";

type IProps = {
    items: { title: string; stageNumber: number }[];
    activeIndex: number;
    className?: string;
  }
  
  const WizardList: React.FC<IProps> = ({ items, activeIndex, className }) => {
    return (
      <div className={classNames(
        "flex justify-center border-y-[1px] border-gray-200 px-2 py-4",
        className
      )}>
        {items.map((item, index) => (
            <div key={index} className="flex items-center">
                <WizardItem
                    title={item.title}
                    active={index === activeIndex}
                    stageNumber={item.stageNumber}
                />
                {index !== items.length - 1 && <Icon className="mx-4" name='chevronRight' size={16} />}
            </div>
        ))}
      </div>
    );
  };
  
  export default WizardList;