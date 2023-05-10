import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.promoSection}>
          <span>Welcome!</span>
          <a href="/#">
            <span> Ready to check out our new features</span>
            <span>--></span>
          </a>
        </div>
        <nav className={styles.navigationBar}>
          <div>Logo</div>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Home</a>
            </li>
          </ul>
          <div>
            <a href="/#">Get started for free</a>
          </div>
        </nav>
      </header>
      <main>main content</main>
      <footer>my footer</footer>
    </>
  );
}
