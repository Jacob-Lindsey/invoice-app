import { useGlobalContext } from "../../context";
import styles from "./List.module.css";
import Button from "../Button/Button";

const List = () => {
    const {
        state,
        items,
        windowWidth,
        handleInvoiceChange,
        handleAddItems,
        handleItemsRemove,
    } = useGlobalContext();
    const isDesktop = windowWidth >= 768;
    const errors = state.errors.err.items === undefined ? false : state.errors.err.items;

    return (
        <fieldset className={styles.container}>
            <legend className={styles.title}>Add-ons</legend>
            <div className={styles.itemList}>
                {isDesktop && items.length > 0 && (
                    <div className={styles.header}>
                        <label>Item Name</label>
                        <label>Qty.</label>
                        <label>Price</label>
                        <label>Total</label>
                    </div>
                )}
                {items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={`${styles.wrapper} ${errors[index]?.name ? styles.error : ''}`}>
                            {!isDesktop && (
                                <label htmlFor={`name${index}`}>
                                    Name
                                    {errors[index]?.name && (
                                        <span className={styles.error}>can't be empty</span>
                                    )}
                                </label>
                            )}
                            <input 
                                type="text"
                                name="name"
                                id={`name${index}`}
                                value={item.name}
                                onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
                            />
                        </div>
                        <div className={styles.group}>
                            <div className={`${styles.wrapper} ${errors[index]?.quantity ? styles.error : ''}`}>
                                {!isDesktop && <label htmlFor='quantity'>Qty.</label>}
                                <input 
                                    type='text'
                                    name='quantity'
                                    id='quantity'
                                    value={item.quantity}
                                    onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
                                />
                            </div>
                            <div className={`${styles.wrapper} ${errors[index]?.price ? styles.error : ''}`}>
                                {!isDesktop && <label htmlFor='price'>Price</label>}
                                <input 
                                    type='text'
                                    name='price'
                                    id='price'
                                    value={item.price}
                                    onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
                                />
                            </div>
                            <div className={`${styles.wrapper} ${errors[index]?.total ? styles.error : ''}`}>
                                {!isDesktop && <label htmlFor='total'>Total</label>}
                                <input 
                                    type='text'
                                    name='totla'
                                    id='total'
                                    value={item.total}
                                    onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
                                />
                            </div>
                            <button
                                type='button'
                                className={styles.delIcon}
                                onClick={() => handleItemsRemove(index)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Button type='button' edit onClick={handleAddItems}>
                + Add Item
            </Button>
        </fieldset>
    );
};

export default List;