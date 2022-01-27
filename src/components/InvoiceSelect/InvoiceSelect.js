import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Status from "../Status/Status";

import { IoIosArrowBack } from "react-icons/io";
import styles from './InvoiceSelect.module.css';
import Button from "../Button/Button";
import InvoiceInfo from '../InvoiceInfo/InvoiceInfo';

const InvoiceSelect = () => {
    const { state, windowWidth, editInvoice, toggleModal } = useGlobalContext();
    const { id } = useParams();
    const [invoice, setInvoice] = useState(
        state.invoices.find((invoice) => invoice.id === id)
    );
    const isMobile = windowWidth < 768;
    const isPaidOrDraft = invoice.status === 'paid' || invoice.status === 'draft'; 
    const isPaid = invoice.status === 'paid';

    useEffect(() => {
        document.title = `Invoice | #${id}`;
    }, [id]);

    useEffect(() => {
        setInvoice(state.invoices.find((invoice) => invoice.id === id));
    }, [state.invoices, id]);

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.back}>
                <IoIosArrowBack />
                <span>Go back</span>
            </Link>

            <div className={styles.control}>
                <p className={styles.title}>Status</p>
                <Status status={invoice.status} />
                {!isMobile && (
                    <div className={styles.actions}>
                        {!isPaid && (
                            <Button edit onClick={() => editInvoice(id)}>
                                Edit
                            </Button>
                        )}
                        <Button del onClick={() => toggleModal(id, 'delete')}>
                            Delete
                        </Button>
                        {!isPaidOrDraft && (
                            <Button primary onClick={() => toggleModal(id, 'status')}>
                                Mark as Paid
                            </Button>
                        )}
                    </div>
                )}
            </div>

            <InvoiceInfo invoice={invoice} />

            {isMobile && (
                <div className={styles.actions}>
                    {!isPaid && (
                        <Button edit onClick={() => editInvoice(id)}>
                            Edit
                        </Button>
                    )}
                    <Button del onClick={() => toggleModal(id, 'delete')}>
                            Delete
                        </Button>
                        {!isPaidOrDraft && (
                            <Button primary onClick={() => toggleModal(id, 'status')}>
                                Mark as Paid
                            </Button>
                        )}
                </div>
            )}
        </div>
    );
};

export default InvoiceSelect;