import { forwardRef } from 'react';
import { useGlobalContext } from '../../../context';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { IoIosCalendar } from 'react-icons/io';

import styles from './DatePicker.module.css';
import './calendar.css';

const dateToString = (date) => {
	const displayOptions = {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	};
	const newDate = new Date(date).toLocaleString('en-US', displayOptions);

	return newDate;
};

const CustomInput = forwardRef(({ isDisabled, value, onClick }, ref) => (
	<button
		type='button'
		disabled={isDisabled}
		onClick={onClick}
		value={value}
		ref={ref}
		className={styles.button}
	>
		{dateToString(value)}
		<IoIosCalendar />
	</button>
));

const DatePicker = () => {
	const { invoice, handleInvoiceChange, state } = useGlobalContext();
	const isInvoiceEdited = state.isInvoiceEdited;

	return (
		<ReactDatePicker
			selected={new Date(invoice.createdAt)}
			minDate={new Date()}
			onChange={(date) => handleInvoiceChange(false, 'date', date)}
			customInput={<CustomInput isDisabled={isInvoiceEdited} />}
			calendarClassName='calender'
			showPopperArrow={false}
		/>
	);
};

export default DatePicker;