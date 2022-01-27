import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Select.module.css";

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { invoice, handleInvoiceChange } = useGlobalContext();
    const ref = useRef();

    useEffect(() => {
        const clickedOutside = (e) => {
            const target = e.target;
            if (isOpen && ref.current && !ref.current.contains(target)) {
                setIsOpen(!isOpen);
            }
        };

        document.addEventListener('click', clickedOutside);

        return () => {
            document.removeEventListener('click', clickedOutside);
        };
    }, [isOpen]);

    const handleClick = (e) => {
        handleInvoiceChange(e, 'invoice');
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            <button
                type='button'
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
            >
                {`${invoice.paymentTerms} ${invoice.paymentTerms === '1' ? 'Day' : 'Days'}`}{' '}
                <IoIosArrowDown />
            </button>
            {isOpen && (
                <div className={styles.termList} ref={ref}>
                    <button
                        className={styles.termItem}
                        name='paymentTerms'
                        value='1'
                        onClick={handleClick}
                    >
                        1 Day
                    </button>
                    <button
                        className={styles.termItem}
                        name='paymentTerms'
                        value='7'
                        onClick={handleClick}
                    >
                        7 Days
                    </button>
                    <button
                        className={styles.termItem}
                        name='paymentTerms'
                        value='30'
                        onClick={handleClick}
                    >
                        30 Days
                    </button>
                    <button
                        className={styles.termItem}
                        name='paymentTerms'
                        value='60'
                        onClick={handleClick}
                    >
                        60 Days
                    </button>
                    <button
                        className={styles.termItem}
                        name='paymentTerms'
                        value='90'
                        onClick={handleClick}
                    >
                        90 Days
                    </button>
                </div>
            )}
        </div>
    );
};

export default Select;