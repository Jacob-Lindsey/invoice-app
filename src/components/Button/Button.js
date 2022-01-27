import styles from "./Button.module.css";

const Button = ({
    children,
    primary,
    newInvoice,
    edit,
    del,
    draft,
    small,
    ...otherProps
}) => {
    return (
        <button
            className={`${styles.button} ${primary ? styles.primary : ''} ${
				newInvoice ? styles.newInvoice : ''
			} ${edit ? styles.edit : ''} ${del ? styles.delete : ''} ${
				draft ? styles.draft : ''
			} ${small ? styles.small : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;