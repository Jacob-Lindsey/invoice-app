import { useGlobalContext } from '../../context';

import styles from './InvoiceInfo.module.css';

const InvoiceInfo = ({ invoice }) => {
	const { windowWidth } = useGlobalContext();
	const isDesktop = windowWidth >= 768;

	const dateToString = (date) => {
		const displayOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
		};
		const newDate = new Date(date).toLocaleString('en-US', displayOptions);

		return newDate;
	};

	const numberToString = (number) => {
		const newNumber = number.toLocaleString('en-US', {
			currency: 'USD',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		return newNumber;
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.id}>
					<span>#</span>
					{invoice.id}
				</p>
				<p className={styles.description}>{invoice.description}</p>
			</div>

			<div className={styles.senderAddress}>
				<p className={`${styles.title} ${styles.address}`}>
					{invoice.senderAddress.street}
					<br />
					{invoice.senderAddress.city}
					<br />
					{invoice.senderAddress.postCode}
					<br />
					{invoice.senderAddress.country}
				</p>
			</div>

			<div className={styles.invoiceDate}>
				<p className={styles.title}>Invoice Date</p>
				<p className={styles.text}>{dateToString(invoice.createdAt)}</p>
			</div>

			<div className={styles.invoiceDue}>
				<p className={styles.title}>Payment Due</p>
				<p className={styles.text}>{dateToString(invoice.paymentDue)}</p>
			</div>

			<div className={styles.billTo}>
				<p className={styles.title}>Bill To</p>
				<p className={styles.text}>{invoice.clientName}</p>
				<p className={`${styles.title} ${styles.address}`}>
					{invoice.clientAddress.street}
					<br />
					{invoice.clientAddress.city}
					<br />
					{invoice.clientAddress.postCode}
					<br />
					{invoice.clientAddress.country}
				</p>
			</div>

			<div className={styles.clientEmail}>
				<p className={styles.title}>Sent to</p>
				<p className={styles.text}>{invoice.clientEmail}</p>
			</div>

			<div className={styles.items}>
				{isDesktop && (
					<div className={styles.head}>
						<div className={`${styles.group} ${styles.name}`}>Item Name</div>
						<div className={styles.group}>QTY.</div>
						<div className={styles.group}>Price</div>
						<div className={styles.group}>Total</div>
					</div>
				)}
				<ul className={styles.list}>
					{invoice.items.map((item, index) => (
						<li className={styles.item} key={index}>
							<p className={styles.title}>{item.name}</p>
							<p className={styles.quantity}>
								{!isDesktop &&
									`${item.quantity} x $ ${numberToString(item.price)}`}
								{isDesktop && item.quantity}
							</p>
							{isDesktop && (
								<p className={styles.price}>$ {numberToString(item.price)}</p>
							)}
							<p className={styles.total}>$ {numberToString(item.total)}</p>
						</li>
					))}
				</ul>
				<div className={styles.grandTotal}>
					<p className={styles.title}>Grand Total</p>
					<p className={styles.text}>${numberToString(invoice.total)}</p>
				</div>
			</div>
		</div>
	);
};

export default InvoiceInfo;