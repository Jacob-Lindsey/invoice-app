import { useEffect, useState, useRef } from 'react';
import { useGlobalContext } from '../../../context';

import { IoIosArrowDown } from 'react-icons/io';

import styles from './Filter.module.css';

const Filter = ({ isDesktop }) => {
	const { filterType, changeFilterType } = useGlobalContext();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const clickedOutside = (e) => {
			const target = e.target.nodeName;

			if (target !== 'BUTTON' && target !== 'UL') {
				setIsFilterOpen(false);
			}
		};

		isFilterOpen && document.addEventListener('click', clickedOutside);

		return () => {
			document.removeEventListener('click', clickedOutside);
		};
	}, [isFilterOpen]);

	const toggleFilterList = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<div className={styles.container}>
			<button className={styles.filter} onClick={toggleFilterList}>
				Filter {isDesktop && 'by status'}
				<IoIosArrowDown />
			</button>
			{isFilterOpen && (
				<ul className={styles.list} ref={ref}>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'draft' ? styles.active : ''
							}`}
							value='draft'
						>
							Draft
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'pending' ? styles.active : ''
							}`}
							value='pending'
						>
							Pending
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'paid' ? styles.active : ''
							}`}
							value='paid'
						>
							Paid
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Filter;