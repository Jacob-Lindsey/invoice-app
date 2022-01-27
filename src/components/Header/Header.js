
import { IoMoon } from 'react-icons/io5';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.actions}>
				<div className={styles['theme-icon']}>
					<IoMoon />
				</div>
				<div className={styles.profile}>
				</div>
			</div>
		</header>
	);
};

export default Header;