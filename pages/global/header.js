import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.box}>
      <div className={styles.logo}>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li><Link href="/" title="Home" /></li>
          <li><Link href="/about" title="About" /></li>
        </ul>
      </nav>
    </div>
  )
}


function Link(props) {
  return <a className={styles.link} href={props.href}>{props.title}</a>
}
