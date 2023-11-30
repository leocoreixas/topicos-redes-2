import {Checkbox} from "@material-tailwind/react";

import Typography from "../../atoms/Typography";

type IProps = {
  labelText?: string,
  items?: Array<any>,
  className?: string,
}

const CheckInputList = (props:IProps) => {
  const { labelText, items, className, ...fieldProps } = props;
  
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
                      <div className="mr-3">
                      <Checkbox
                  id="vertical-list-react"
                  ripple={false}
                  className="hover:before:opacity-0 checked:border-secondary-m checked:bg-secondary-m"
                  containerProps={{
                    className: "p-0 [&>span]:bg-secondary-m",
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
  
export default CheckInputList;