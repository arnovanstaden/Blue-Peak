import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<Props> = (props) => {
  const ButtonBase = () => (
    <button className={styles.Button} onClick={props.onClick} type="button">
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
