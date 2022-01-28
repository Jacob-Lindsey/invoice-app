import { IoMoon } from 'react-icons/io5';
import styles from './Header.module.css';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.actions}>
				<ThemeToggler />
			</div>
		</header>
	);
};

export default Header;