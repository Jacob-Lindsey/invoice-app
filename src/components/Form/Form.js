import { useGlobalContext } from "../../context";
import DatePicker from '../FormController/DatePicker/DatePicker';
import List from "../List/List";
import Select from "../Select/Select";
import styles from "./Form.module.css";

const Form = () => {
    const { invoice, handleInvoiceChange, state } = useGlobalContext();
    const isInvoiceEdited = state.isInvoiceEdited;
    const errors = state.errors.err;
    const messages = state.errors.msg;

    return (

        <>
            {!isInvoiceEdited && <h1 className={styles.title}>New Invoice</h1>}
            {isInvoiceEdited && (
                <h1 className={styles.title}>
                    Edit <span>#</span>
                    {invoice.id}
                </h1>
            )}
            <form className={styles.form}>
                <fieldset className={styles.formGroup}>
                    <legend className={styles.formGroupTitle}>Billing From</legend>

                    <div className={`${styles.inputWrapper} ${errors.senderAddress?.street ? styles.error : ''}`}>
                        <label htmlFor='senderStreet' className={styles.label}>
                            Street Address
                            {errors.senderAddress?.street && (
                                <span className={styles.error}>can't be empth</span>
                            )}
                        </label>
                        <input 
                            type='text'
                            name='street'
                            value={invoice.senderAddress.street}
                            id='senderStreet'
                            className={styles.input}
                            onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
                        />
                    </div>

                    <div className={styles.inputGroupAddress}>
                        <div className={`${styles.inputWrapper} ${errors.senderAddress?.city ? styles.error : ''}`}>
                            <label htmlFor="senderCity" className={styles.label}>
                                City
                                {errors.senderAddress?.city && (
                                    <span className={styles.error}>can't be empty</span>
                                )}
                            </label>
                            <input 
                            type='text'
                            name='city'
                            value={invoice.senderAddress.city}
                            id='senderCity'
                            className={styles.input}
                            onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
                        />
                        </div>
                        <div className={`${styles.inputWrapper} ${errors.senderAddress?.postCode ? styles.error : ''}`}>
                            <label htmlFor="senderPostCode" className={styles.label}>
                                Zip Code
                                {errors.senderAddress?.postCode && (
                                    <span className={styles.error}>can't be empty</span>
                                )}
                            </label>
                            <input 
                            type='text'
                            name='postCode'
                            value={invoice.senderAddress.postCode}
                            id='senderPostCode'
                            className={styles.input}
                            onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
                        />
                        </div>
                        <div className={`${styles.inputWrapper} ${errors.senderAddress?.country ? styles.error : ''}`}>
                            <label htmlFor="senderCountry" className={styles.label}>
                                City
                                {errors.senderAddress?.country && (
                                    <span className={styles.error}>can't be empty</span>
                                )}
                            </label>
                            <input 
                            type='text'
                            name='country'
                            value={invoice.senderAddress.country}
                            id='senderCountry'
                            className={styles.input}
                            onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
                        />
                        </div>
                    </div>
                </fieldset>
                <fieldset className={styles.formGroup}>
					<legend className={styles.formGroupTitle}>Bill To</legend>
					<div
						className={`${styles.inputWrapper} ${
							errors.clientName ? styles.error : ''
						}`}
					>
						<label htmlFor='clientName' className={styles.label}>
							Client's Name
							{errors.clientName && (
								<span className={styles.error}>can't be empty</span>
							)}
						</label>
						<input
							type='text'
							name='clientName'
							id='clientName'
							className={styles.input}
							value={invoice.clientName}
							onChange={(e) => handleInvoiceChange(e, 'invoice')}
						/>
					</div>

					<div
						className={`${styles.inputWrapper} ${
							errors.clientEmail ? styles.error : ''
						}`}
					>
						<label htmlFor='clientEmail' className={styles.label}>
							Client's Email
							{errors.clientEmail && (
								<span className={styles.error}>email is invalid</span>
							)}
						</label>
						<input
							type='text'
							name='clientEmail'
							id='clientEmail'
							className={styles.input}
							value={invoice.clientEmail}
							onChange={(e) => handleInvoiceChange(e, 'invoice')}
						/>
					</div>

					<div
						className={`${styles.inputWrapper} ${
							errors.clientAddress?.street ? styles.error : ''
						}`}
					>
						<label htmlFor='clientStreet' className={styles.label}>
							Street Address
							{errors.clientAddress?.street && (
								<span className={styles.error}>can't be empty</span>
							)}
						</label>
						<input
							type='text'
							name='street'
							id='clientStreet'
							className={styles.input}
							value={invoice.clientAddress.street}
							onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
						/>
					</div>

					<div className={styles.inputGroupAddress}>
						<div
							className={`${styles.inputWrapper} ${
								errors.clientAddress?.city ? styles.error : ''
							}`}
						>
							<label htmlFor='clientCity' className={styles.label}>
								City
								{errors.clientAddress?.city && (
									<span className={styles.error}>can't be empty</span>
								)}
							</label>
							<input
								type='text'
								name='city'
								id='clientCity'
								className={styles.input}
								value={invoice.clientAddress.city}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
							/>
						</div>
						<div
							className={`${styles.inputWrapper} ${
								errors.clientAddress?.postCode ? styles.error : ''
							}`}
						>
							<label htmlFor='clientPostCode' className={styles.label}>
								Post Code
								{errors.clientAddress?.postCode && (
									<span className={styles.error}>can't be empty</span>
								)}
							</label>
							<input
								type='text'
								name='postCode'
								id='clientPostCode'
								className={styles.input}
								value={invoice.clientAddress.postCode}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
							/>
						</div>

						<div
							className={`${styles.inputWrapper} ${styles.country} ${
								errors.clientAddress?.country ? styles.error : ''
							}`}
						>
							<label htmlFor='clientCountry' className={styles.label}>
								Country
								{errors.clientAddress?.country && (
									<span className={styles.error}>can't be empty</span>
								)}
							</label>
							<input
								type='text'
								name='country'
								id='clientCountry'
								className={styles.input}
								value={invoice.clientAddress.country}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
							/>
						</div>
					</div>
				</fieldset>

				<fieldset className={styles.formGroup}>
					<div className={styles.inputGroupOptions}>
						<div className={styles.inputWrapper}>
							<label className={styles.label}>Invoice Date</label>
							<DatePicker />
						</div>
						<div className={styles.inputWrapper}>
							<label className={styles.label}>Payment Terms</label>
							<Select />
						</div>
						<div
							className={`${styles.inputWrapper} ${styles.description} ${
								errors.description ? styles.error : ''
							}`}
						>
							<label htmlFor='description' className={styles.label}>
								Project Description
								{errors.description && (
									<span className={styles.error}>can't be empty</span>
								)}
							</label>
							<input
								type='text'
								name='description'
								id='description'
								className={styles.input}
								value={invoice.description}
								onChange={(e) => handleInvoiceChange(e, 'invoice')}
							/>
						</div>
					</div>
				</fieldset>
                <List />

                {messages.length > 0 && (
                    <div className={styles.errorContainer}>
                        {messages.map((item, index) => (
                            <span key={index} className={styles.error}>
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </form>
        </>
    );
};

export default Form;