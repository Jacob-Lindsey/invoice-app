import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const ModalDelete = () => {
	const { state, toggleModal, deleteInvoice } = useGlobalContext();
	const history = useNavigate();

	const reRoute = () => {
		let path = '/';
		history(path);
	};

	return (
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Confirm Deletion</h1>
			<p className={styles.tagline}>
				Are you sure you want to delete invoice #{state.currInvoiceIndex}? This
				action cannot be undone.
			</p>
			<div className={styles.actions}>
				<Button edit onClick={toggleModal}>
					Cancel
				</Button>
				<Button
					del
					onClick={() => {
						deleteInvoice();
						reRoute();
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ModalDelete;