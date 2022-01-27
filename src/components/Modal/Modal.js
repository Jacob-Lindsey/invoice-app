import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useGlobalContext } from '../../context';
import styles from './Modal.module.css';
import ModalDelete from './ModalDelete';
import ModalStatus from './ModalStatus';

const Modal = () => {
	const { state, toggleModal } = useGlobalContext();
	const isDeleteModal = state.isModalOpen.name === 'delete';
	const isStatusModal = state.isModalOpen.name === 'status';
	const modalRef = useRef();

	const handleClickOutsideModal = (e) => {
		const target = e.target;
		if (target === modalRef.current) toggleModal();
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutsideModal);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('click', handleClickOutsideModal);
			document.body.style.overflow = 'unset';
		};
	});

	const modal = (
		<div className={styles.modal} ref={modalRef}>
			{isDeleteModal && <ModalDelete />}
			{isStatusModal && <ModalStatus />}
		</div>
	);
	return ReactDOM.createPortal(modal, document.body);
};

export default Modal;