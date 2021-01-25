import styles from './Footer.module.css';

function Footer(props) {
    return (
    <footer className={styles.Footer}>
        <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} Cat Facts🧶</p>
    </footer>
    )
}

export default Footer;