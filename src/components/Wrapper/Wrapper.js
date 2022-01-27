import styles from './Wrapper.module.css';

const Wrapper = ({ children }) => {
	return <main className={styles.wrapper}>{children}</main>;
};

export default Wrapper;