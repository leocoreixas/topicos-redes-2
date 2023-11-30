import classNames from "classnames";


interface IProps {
  isFixed?: boolean,
  hasBackground?: boolean,
  size: number,
  color: "primary" | "secondary" | "white" | "error",
  className?: string
}

console.log('Spinner');
const Spinner = (props: IProps) => {
  const {
    isFixed,
    hasBackground,
    size = 55,
    color = 'white',
    className
  } = props;

  const wrapper_classes = {
    base: 'h-full flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2',
    withBackground: '',
    fixed: ''
  }

  const effects_classes = {
    base: 'rounded-full border-[3px] border-transparent border-solid box-border border-l-[3px] border-l-white',
    effect_1: 'absolute animate-rotate 1s',
    effect_2: 'absolute animate-rotateOpacity1',
    effect_3: 'animate-rotateOpacity2',
  }

  const color_classes = {
    primary: 'border-l-primary-m',
    secondary: 'border-l-secondary-m',
    white: 'border-l-white',
    error: 'border-l-error-m',
  }

  return (
    <div
      className={classNames(
        wrapper_classes.base,
        hasBackground && wrapper_classes.withBackground,
        isFixed && wrapper_classes.fixed,
        className
      )}
    >
      <div
        className={classNames(effects_classes.base, effects_classes.effect_1, color_classes[color])}
        style={{ height: size - 5, width: size - 5 }}
      />
      <div
        className={classNames(effects_classes.base, effects_classes.effect_2, color_classes[color])}
        style={{ height: size - 5, width: size - 5 }}
      />
      <div
        className={classNames(effects_classes.base, effects_classes.effect_3, color_classes[color])}
        style={{ height: size - 5, width: size - 5 }}
      />
    </div>
  )
}

export default Spinner;