import Button from '@components/UI/Button/Button';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  return (
    <div className={styles.ContactForm}>
      <form action="">
        <input type="text" name="name" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="phone" name="phone" placeholder="Phone" />
        <input type="address" name="address" placeholder="Address" />
        <textarea placeholder="Message" name="message" rows={4} />
      </form>
      <Button variant="contained" colour="primary">
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
