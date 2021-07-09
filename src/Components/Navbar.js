import styles from './NavBar.module.css';
import NameContext from '../context/NameContext';


const Navbar = () => {

    return (
        <NameContext.Consumer>
            {NameContext => (
                <div className={styles.nav}>Hello {NameContext.name}!</div>
            )}

        </NameContext.Consumer>
    )
}

export default Navbar;