import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import Form from '../Form/Form';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './FormController.module.css';
import SubmitController from './SubmitController/SubmitController';

const FormController = () => {
    const { windowWidth, discard, handleSubmit } = useGlobalContext();
    const backdropRef = useRef();
    const isDesktop = windowWidth >= 768;

    const handleClickOutsideForm = (e) => {
        const target = e.target;
        if (target === backdropRef.current) discard();
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideForm);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('click', handleClickOutsideForm);
            document.body.style.overflow = 'unset';
        };
    });

    const controller = (
        <>
            <div className={styles.backdrop} ref={backdropRef}></div>
            <div className={styles.formController}>
                {!isDesktop && (
                    <Link to='/' onClick={discard} className={styles.goBack}>
                        <IoIosArrowBack className={styles.arrow} /> Go Back
                    </Link>
                )}
                <Form isDesktop={isDesktop} />
                <SubmitController discard={discard} submit={handleSubmit} />
            </div>
        </>
    );

    return ReactDOM.createPortal(controller, document.body);
};

export default FormController;