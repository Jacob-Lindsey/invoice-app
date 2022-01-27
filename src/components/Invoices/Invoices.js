import { useEffect } from 'react';
import { useGlobalContext } from '../../context';
import Filter from './Filter/Filter';
import Button from '../Button/Button';
import List from './List/List';
/* import invoiceMessage from '../../helpers/invoiceMessage'; */
import Empty from './Empty/Empty';

import styles from './Invoices.module.css';

const Invoices = () => {
	const { filteredInvoices, filterType, windowWidth, createInvoice } =
		useGlobalContext();
	const isDesktop = windowWidth >= 768;
	const isEmpty = filteredInvoices.length === 0;

	useEffect(() => {
		document.title = `Invoices (${filteredInvoices.length})`;
	}, [filteredInvoices]);

	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<div className={styles.info}>
					<h1>Invoices</h1>
					{/* <span>
						{invoiceMessage(filteredInvoices, filterType, windowWidth)}
					</span> */}
				</div>
				<Filter isDesktop={isDesktop} />
				<Button primary newInvoice onClick={createInvoice}>
					New {isDesktop && 'Invoice'}
				</Button>
			</header>
			{isEmpty && <Empty />}
			{!isEmpty && <List />}
		</section>
	);
};

export default Invoices;