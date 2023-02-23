import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href="/" className={styles.title}>Maxim McNair</a>
        <nav className={styles.links}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#article">Articles</a>
          {/* <a href="#experiments">Experiments</a> */}
        </nav>
      </div>
    </header>
  );
} 
export default Header;
