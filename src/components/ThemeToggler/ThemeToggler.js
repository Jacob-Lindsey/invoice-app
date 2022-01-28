import { useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import useStickyState from "../../utils/useStickyState";
import styles from "./ThemeToggler.module.css";

const ThemeToggler = () => {

    const [theme, setTheme] = useStickyState('dark', 'theme');

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    });

    const toggleDarkMode = () => {
        let preferredTheme = theme === "dark" ? "light" : "dark";
        setTheme(preferredTheme);
        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute("data-theme", preferredTheme);
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-transition')
        }, 1000);
    };

    return (
        <div className={styles.themeToggler}>
            <input id="toggle" type="checkbox" name="toggle" className={styles.switch} onChange={toggleDarkMode} checked={theme === "dark" ? true : false} />
            <label htmlFor="toggle" className={styles.label}>
                <IoSunnySharp className={styles.toggleUnchecked} />
                <IoMoonSharp className={styles.toggleChecked} />
            </label>
        </div>
    )
};

export default ThemeToggler;