import * as ACTION_TYPES from "./action_type";
import generateUID from "../../utils/generateUID";
import generatePaymentDueDate from "../../utils/generatePaymentDueDate";

export const create = () => {
    return { type: ACTION_TYPES.CREATE };
};

export const discard = () => {
    return { type: ACTION_TYPES.DISCARD };
};

export const add = (invoice, state, type) => {
    return {
        type: ACTION_TYPES.ADD_INVOICE,
        payload: {
            invoice: invoice,
            id: generateUID(state.invoices),
            paymentDue: generatePaymentDueDate(
                invoice.createdAt,
                invoice.paymentTerms
            ),
            state: type === 'new' ? 'pending' : 'draft',
        },
    };
};

export const edit = (index) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload: { id: index },
    };
};

export const change = (invoice) => {
    return {
        type: ACTION_TYPES.SAVE_CHANGES,
        payload: {
            invoice: invoice,
            paymentDue: generatePaymentDueDate(
                invoice.createdAt,
                invoice.paymentTerms
            ),
            status: 'pending',
        },
    };
};

export const remove = () => {
    return {
        type: ACTION_TYPES.DELETE,
    };
};

export const paid = () => {
    return {
        type: ACTION_TYPES.PAID,
    };
};

export const modal = (index, name) => {
    return {
        type: ACTION_TYPES.TOGGLE_MODAL,
        payload: { name: name ? name : '', id: index ? index : '' },
    };
};

export const errors  = (err, msg) => {
    return {
        type: ACTION_TYPES.SET_ERRORS,
        payload: { err, msg },
    };
};