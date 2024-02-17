import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  colour?: 'font' | 'primary';
  variant?: 'contained' | 'outlined' | 'text';
  withArrow?: boolean;
}

const Button: React.FC<Props> = ({
  variant = 'outlined',
  colour = 'font',
  ...props
}) => {
  const buttonClasses = classNames(
    styles.Button,
    styles[`colour-${colour}`],
    styles[`variant-${variant}`]
  );

  const ButtonBase = () => (
    <button className={buttonClasses} onClick={props.onClick} type='button'>
      {props.children}
      {props.withArrow && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 -960 960 960'
          width='24'
        >
          <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
        </svg>
      )}
    </button>
  );

  if (props.href) {
    return (
      <a href={props.href}>
        <ButtonBase />
      </a>
    );
  }

  return <ButtonBase />;
};

export default Button;
