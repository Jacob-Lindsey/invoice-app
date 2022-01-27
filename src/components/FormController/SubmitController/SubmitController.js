import { useGlobalContext } from "../../../context";
import Button from "../../Button/Button";
import styles from './SubmitController.module.css';

const SubmitController = () => {
    const { discard, handleSubmit, state } = useGlobalContext();
    const isEdited = state.isInvoiceEdited;

    return (
        <div className={`${styles.container} ${isEdited ? styles.editing : ''}`}>
            <Button type='button' edit small onClick={discard}>
                {!isEdited ? 'Discard' : 'Cancel'}
            </Button>
            {!isEdited && (
                <Button
                    type='submit'
                    draft
                    small
                    onClick={(e) => handleSubmit(e, 'save')}
                >
                    Save as Draft
                </Button>
            )}
            <Button
                type='submit'
                primary
                small
                onClick={(e) => handleSubmit(e, `${!isEdited ? 'add' : 'change'}`)}
            >
                {!isEdited ? 'Save & Send' : 'Save Changes'}
            </Button>
        </div>
    );
};

export default SubmitController;