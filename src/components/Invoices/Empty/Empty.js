import styles from './Empty.module.css';

const NoInvoices = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>There is nothing here</h2>
			<p className={styles.tagline}>
				Create an invoice by clicking the <span>New</span> button and get
				started
			</p>
		</div>
	);
};

export default NoInvoices;