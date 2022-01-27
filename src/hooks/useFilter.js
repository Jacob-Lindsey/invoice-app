import { useEffect, useState, useRef, useCallback } from "react";

const INITIAL_FILTER_TYPE = 'all';

const useFilter = (callback) => {
    const [filterType, setFilterType] = useState(INITIAL_FILTER_TYPE);
    const [filteredInvoices, setFilteredInvoices] = useState(callback.invoices);
    const prevFilterType = useRef(INITIAL_FILTER_TYPE);

    const handleFilter = useCallback(
        (type) => {
            if (type === INITIAL_FILTER_TYPE) {
                setFilteredInvoices(callback.invoices);
                return false;
            }
            const newInvoices = callback.invoices.filter(
                (item) => item.status === type
            );
            setFilteredInvoices(newInvoices);
        },
        [callback.invoices]
    );

    const changeFilterType = (e) => {
        const type = e.target.value;

        if (prevFilterType.current === type) {
            prevFilterType.current = INITIAL_FILTER_TYPE;
            handleFilter(INITIAL_FILTER_TYPE);
            setFilterType(INITIAL_FILTER_TYPE);
            return false;
        }

        prevFilterType.current = type;
        handleFilter(type);
        setFilterType(type);
    };

    useEffect(() => {
        handleFilter(filterType);
    }, [handleFilter,filterType]);

    return {
        filteredInvoices,
        filterType,
        changeFilterType,
    };
};

export default useFilter;