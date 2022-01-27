import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context';
import Status from '../../Status/Status';

import { IoIosArrowForward } from 'react-icons/io';

import styles from './List.module.css';

const List = () => {
	const { filteredInvoices, windowWidth } = useGlobalContext();

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
		<ul className={styles.list}>
			{filteredInvoices.map(({ id, paymentDue, clientName, total, status }) => (
				<li className={styles.item} key={id}>
					<Link className={styles.link} to={`/invoice/${id}`}>
						<p className={styles.id}>
							<span className={styles.hash}>#</span>
							{id}
						</p>
						<p className={styles['payment-due']}>
							Due {dateToString(paymentDue)}
						</p>
						<p className={styles['client-name']}>{clientName}</p>
						<p className={styles.total}>${numberToString(total)}</p>
						<Status status={status} isList />
						{windowWidth >= 768 && <IoIosArrowForward />}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default List;