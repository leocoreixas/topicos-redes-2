import classNames from 'classnames';
import { ChangeEventHandler, forwardRef, InputHTMLAttributes, ReactElement, useState } from 'react';


interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string | ReactElement
  id?: string,
  name?: string,
  value: string,
  type?: "checkbox" | "switch" | "radio",
  onChange?: ChangeEventHandler,
  required?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  className?: string,
  checked?: boolean
}

const CheckInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { labelText, invalid, checked, className, ...fieldProps } = props;
  
  const classes = {
    wrapper: 'flex items-center',
    input: {
      base: {
        all: 'appearance-none cursor-pointer transition duration-200 relative w-5 h-5 border hover:border-secondary-m focus:border-color-primary mr-1',
        disabled: 'cursor-not-allowed !bg-gray-300',
        checkbox: 'w-[16px] h-[16px] border-[1px] rounded-sm',
        radio: "w-[16px] h-[16px] border-[1px] rounded-full before:content-[''] before:width-[12px] before:height-[12px] before:absolute block rounded-full bg-transparent",
        switch: 'w-[32px] h-[16px] rounded-full'
      },
      checked: {
        checkbox: "bg-no-repeat bg-center bg-secondary-m bg-check",
        radio: "!bg-secondary-m bg-radio before:bg-secondary-m",
        switch: "bg-gray-300 rounded-full"
      } 
    },
    invalid: '!border-error-m',
    label: 'inline-block align-left transition duration-200 cursor-pointer',
  }

  const input_props = {
    ...fieldProps,
    type: fieldProps.type === 'switch' ? 'checkbox' : fieldProps.type,
    
    className: classNames(
      classes.input.base.all,
      {[classes.input.base.checkbox]: fieldProps.type === 'checkbox'},
      {[classes.input.base.radio]: fieldProps.type === 'radio'},
      {[classes.input.base.switch]: fieldProps.type === 'switch'},
      {[classes.invalid]: invalid},
      {[classes.input.checked.checkbox]: checked && fieldProps.type === 'checkbox'},
      {[classes.input.checked.radio]: checked && fieldProps.type === 'radio'},
      {[classes.input.checked.switch]: checked && fieldProps.type === 'switch'},
    ),
    ref
  }
// classes: switch invalid className
  return (
    <>
      <div className={classNames(
            classes.wrapper,
            {[classes.invalid]: invalid},
            className
          )}>
        <input  {...input_props} />
        {labelText && 
        <label className={classNames(classes.label)} htmlFor={fieldProps.id}>
          {labelText}
        </label>
        }
      </div>
    </>
  )
})

export default CheckInput;