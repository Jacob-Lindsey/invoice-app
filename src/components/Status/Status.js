import styles from './Status.module.css';

const Status = ({ status, isList }) => {
    return (
        <div className={`${styles.status} ${
            status === 'paid'
                ? styles.paid
                : status === 'pending'
                ? styles.pending 
                : styles.draft
            } ${isList ? styles.isList : ''}`}
        >
            <span className={styles.circle}></span>
            <p className={styles.text}>{status}</p>
        </div>
    );
};

export default Status;