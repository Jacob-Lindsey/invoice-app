import { useGlobalContext } from '../../context';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalStatus = () => {
	const { state, toggleModal, markInvoicePaid } = useGlobalContext();

	return (
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Confirm Change</h1>
			<p className={styles.tagline}>
				Are you sure you want to mark invoice #{state.currInvoiceIndex} as paid?
				This action cannot be undone.
			</p>
			<div className={styles.actions}>
				<Button edit onClick={toggleModal}>
					Cancel
				</Button>
				<Button primary onClick={markInvoicePaid}>
					Mark as Paid
				</Button>
			</div>
		</div>
	);
};

export default ModalStatus;