import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import Select, { Props, components, Theme } from 'react-select';
import Icon from './../../icon/index';
import classNames from 'classnames';

type IProps = Props & {
  labelText?: string,
  invalid?: boolean,
  isAsync?: boolean,
  isCreatable?: boolean,
  className?: string,
  supportText?: string,
  onCreateOption?: Function,
  loadOptions?: Function,
  defaultOptions?: any
}

const control_classes = {
  base: "border rounded bg-white hover:cursor-pointer text-body-sm px-3",
  focus: "min-h-11 cursor-pointer box-shadow-none border-1 border-solid border-secondary-m rounded",
  nonFocus: "min-h-11 cursor-pointer box-shadow-none border-1 border-solid border-gray-300 rounded",
  base_invalid: "border border-error rounded bg-white hover:cursor-pointer text-body-sm px-3",
};
const placeholder_classes = "text-body-sm text-gray-400";
const select_input_classes = "";
const value_container_classes = "gap-1";
const single_value_classes = "text-black";
const multi_value_classes = "bg-secondary-m rounded items-center pl-2 pr-1 gap-1.5 text-white";
const multi_value_label_classes = "";
const multi_value_remove_classes = "border text-secondary-m border-gray-500 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded";
const indicators_container_classes = "gap-1";
const clear_indicator_classes = "text-secondary-m p-1 rounded hover:bg-red-50 hover:text-red-800";
const indicator_separator_classes = "bg-transparent";
const dropdown_indicator_classes = "hover:bg-gray-100 text-gray-500 rounded hover:text-black";
const menu_classes = "p-1 mt-2 border text-body-sm border-gray-200 bg-white rounded";
const group_heading_classes = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const option_classes = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 hover:bg-secondary-l",
  selected: "text-gray-300 hover:bg-transparent",
};
const no_options_message_classes = "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded";

const classes = {
  base: 'flex flex-col-reverse relative [&>label]:align-left',
  invalid: '[&>label]:text-error [&>p]:text-error',
}


const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <Icon color='gray-300' name='chevronDown' size={16}></Icon>
  </components.DropdownIndicator>
);

const CreatableNoOptionsMessage = (props: any) => (
  <components.NoOptionsMessage {...props}>
    <div onClick={() => props.onCreateOption()} className="text-link flex items-center justify-center">
      <Icon name='chevronDown' size={18}></Icon>
      <span className='ml-xsm'>Adicionar Novo</span>
    </div>
  </components.NoOptionsMessage>
)

const Option = (props: any) => (
  <components.Option {...props}>
    {props.data.__isNew__
      ? (
        <div className="text-link flex items-center justify-center">
          <Icon name='chevronDown' size={18}></Icon>
          <span className='ml-xsm'>Adicionar Novo</span>
        </div>
      )
      : props.children
    }
  </components.Option>
)

const SelectInput = (props: IProps) => {
  const { labelText, name, isAsync, isCreatable, className, invalid, supportText, ...input_props } = props;

  const theme = (theme: Theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'rgba(0, 193, 133, 0.08)', // for option hover bg-color
      primary: '#00C185', // gray-800 - for active option bg-color
      primary50: 'rgba(0, 193, 133, 0.08)', // for option focus bg-color
      neutral10: '#00C185', // brand-primary - for tags bg-color
      dangerLight: '#00C185', // brand-primary - for tags hover bg-color
      neutral80: '#FFFFFF', // white -  for tags text bg-color
      neutral20: '#CCCCCC', // plataforma-border - for input border-color
      neutral30: '#CCCCCC', // plataforma-border - for input hover border-color
    }
  })

  const select_props = {
    unstyled: true,
    classNames: {
      control: ({ isFocused }: any) =>
        classNames(
          isFocused ? control_classes.focus : control_classes.nonFocus,
          invalid ? control_classes.base_invalid : control_classes.base
        ),
      placeholder: () => placeholder_classes,
      input: () => select_input_classes,
      valueContainer: () => value_container_classes,
      singleValue: () => single_value_classes,
      multiValue: () => multi_value_classes,
      multiValueLabel: () => multi_value_label_classes,
      multiValueRemove: () => multi_value_remove_classes,
      indicatorsContainer: () => indicators_container_classes,
      clearIndicator: () => clear_indicator_classes,
      indicatorSeparator: () => indicator_separator_classes,
      dropdownIndicator: () => dropdown_indicator_classes,
      menu: () => menu_classes,
      groupHeading: () => group_heading_classes,
      option: ({ isFocused, isSelected }: any) =>
        classNames(
          isFocused ? option_classes.focus : '',
          isSelected ? option_classes.selected : '',
          option_classes.base
        ),
      noOptionsMessage: () => no_options_message_classes,
    },
    components: {
      DropdownIndicator,
      Option,
      NoOptionsMessage: isCreatable
        ? (props: any) => <CreatableNoOptionsMessage onCreateOption={input_props.onCreateOption} {...props} />
        : components.NoOptionsMessage,
      ...props.components
    },
    noOptionsMessage: () => "Lista de opções vazia",
    styles: {
      menuPortal: (base: any) => ({ ...base, zIndex: 9999 }), input: (base) => ({
        ...base,
        "input:focus": {
          boxShadow: "none",
        },
      }),
      // On mobile, the label will truncate automatically, so we want to
      // override that behaviour.
      multiValueLabel: (base: any) => ({
        ...base,
        whiteSpace: "normal",
        overflow: "visible",
      }),
      control: (base: any) => ({
        ...base,
        transition: "none",
      }),
    },
    menuPortalTarget: document.body,
    ...input_props
  }

  let SelectTag = Select;

  if (isAsync) {
    SelectTag = AsyncSelect;
  }

  if (isCreatable) {
    SelectTag = CreatableSelect;
  }

  // console.log('input_props.value', input_props.value)

  return (
    <div className={classNames(
      classes.base,
      invalid ? classes.invalid : '',
      className,
    )}>
      {supportText && <p className={`text-label-sm ml-2 mt-1`}>{supportText}</p>}
      <SelectTag {...select_props} />
      {labelText && <label className='text-body-sm mb-1 text-gray-800' htmlFor={name}>{labelText}</label>}

    </div>
  );
}

export default SelectInput;