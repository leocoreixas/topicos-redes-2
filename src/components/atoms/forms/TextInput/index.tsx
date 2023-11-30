import { forwardRef } from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';


interface IProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string,
  type: "text" | "number" | "e-mail" | "password" | "textarea" | "date" | "time" | "mask",
  mask?: string,
  rightBtnAction?: () => void,
  rightIconComponent?: React.ReactElement,
  leftIconComponent?: React.ReactElement
  className?: string,
  supportText?: string,
  invalid?: boolean
}

const TextInput = forwardRef<any, IProps>((props, ref) => {
  const { mask, rightBtnAction, rightIconComponent, invalid, className,
    supportText, label, type, leftIconComponent, disabled, ...fieldProps } = props;

  const classes = {
    wrapper: 'flex flex-col-reverse relative',
    input: {
      base: 'w-full h-[38px] border border-gray-300 rounded px-3 py-2 bg-white text-body-sm text-black transition durantion-200 outline-none focus:border-secondary-m',
      filled: '',
      disabled: 'cursor-not-allowed !bg-gray-100',
      invalid: '!border-error-m',
      leftIcon: '!pl-10'
    },
    label: {
      base: 'text-body-sm text-gray-800 mb-1',
      invalid: '!text-error-m'
    },
    support_text: {
      base: 'text-caption text-gray-700 ml-2 mt-1',
      invalid: '!text-error-m',
    },
    left_icon: 'absolute left-3 bottom-3',
    right_icon: {
      base: 'absolute right-3 bottom-2.5 cursor-default',
      icon: 'cursor-pointer',
    }
  }

  const mask_input_props = {
    ...fieldProps,
    ref,
    disabled,
    type: 'text',
    invalid: String(invalid),
    mask: mask || '',
    className: classNames(
      classes.input.base,
      {[classes.input.disabled]: disabled},
      {[classes.input.invalid]: invalid},
      {[classes.input.filled]: props.value !== ''},
      {[classes.input.leftIcon]: leftIconComponent !== undefined}
    )
  }

  const input_props = {
    ...fieldProps,
    ref,
    type,
    disabled,
    invalid: String(invalid),
    className: classNames(
      classes.input.base,
      {[classes.input.disabled]: disabled},
      {[classes.input.invalid]: invalid},
      {[classes.input.filled]: props.value !== ''},
      {[classes.input.leftIcon]: leftIconComponent !== undefined}
    )
  }

  const inputs: any = {
    'mask': { tag: InputMask, input_props: mask_input_props },
    'textarea': { tag: 'textarea', input_props: { ...input_props, rows: 4 } },
    'text': { tag: 'input', input_props },
    'number': { tag: 'input', input_props },
    'e-mail': { tag: 'input', input_props },
    'password': { tag: 'input', input_props },
    'date': { tag: 'input', input_props },
    'time': { tag: 'input', input_props }
  }

  const InputTag = inputs[type].tag;
  const input_tag_props = inputs[type].input_props;

  return (
    <div className={className}>
      <div className={classes.wrapper}>
        {leftIconComponent && (
          <div className={classes.left_icon}>
            {leftIconComponent}
          </div>
        )}
        <InputTag {...input_tag_props} />
        {rightIconComponent !== undefined && (
          <button
            type='button'
            onClick={() => rightBtnAction ? rightBtnAction() : null}
            className={classNames(
              classes.right_icon.base,
              {[classes.right_icon.icon]: rightBtnAction !== undefined}
            )}
          >
            {rightIconComponent}
          </button>
        )}
        <label 
          className={classNames(
            classes.label.base,
            {[classes.label.invalid]: invalid}
          )} 
          htmlFor={fieldProps.name}
        >
          {label}
        </label>
      </div>

      {supportText && (
        <p className={classNames(
          classes.support_text.base,
          {[classes.support_text.invalid]: invalid}
        )}
        >
          {supportText}
        </p>
      )}
    </div>
  )
})

export default TextInput;