import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  colour?: 'font' | 'primary';
  variant?: 'contained' | 'outlined';
}

const Button: React.FC<Props> = ({
  variant = 'outlined',
  colour = 'font',
  ...props
}) => {
  const buttonClasses = classNames(
    styles.Button,
    styles[`colour-${colour}`],
    styles[`variant-${variant}`],
  );

  const ButtonBase = () => (
    <button className={buttonClasses} onClick={props.onClick} type="button">
      {props.children}
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
