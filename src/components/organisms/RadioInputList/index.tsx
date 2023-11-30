import {Radio} from "@material-tailwind/react";
import Typography from "../../atoms/Typography";

type IProps = {
  labelText?: string,
  items?: Array<any>,
  className?: string,
}

const RadioInputList = (props:IProps) => {
  const { labelText, items, className, key, ...fieldProps } = props;
  
  return (
    <>
    <div className={className}>
    <Typography
      className=""
      tag={'label'}
      variant="body-sm"
    >
      {labelText}
    </Typography>        
     <div className="flex">
        
     {items && items.map((item, index) => (
                    <div key={index} className="p-0">
                      <label
                        htmlFor="horizontal-list-react"
                        className="flex w-full cursor-pointer pr-3 py-2"
                      >
                        <div className="flex mr-3">
                          <Radio
                            color="blue-gray"
                            name="horizontal-list"
                            id="horizontal-list-react"
                            ripple={false}
                            className="hover:before:opacity-0 checked:border-secondary-m checked:text-secondary-m"
                            containerProps={{
                              className: "p-0 [&>span]:text-secondary-m",
                            }}
                          />
                        </div>
                        <Typography
                          tag={'label'}
                          variant="body-sm"
                        >
                          {item.value}
                        </Typography>
                      </label>
                    </div>
                ))}
      </div>
      </div>
    </>
     

  );
}
  
export default RadioInputList;