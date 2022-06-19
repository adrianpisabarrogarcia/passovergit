import styles from '../styles/Main.module.css'

import SiteImage from './site-image.js'


export default function Main() {
  return (
    <div className={styles.principalContent}>
        <SiteImage />
        <div className={styles.secondContent}>
            <h1>Pass Over Git</h1>
            <p>Your best engine to create a <code>.gitignore</code> file.</p>
            <textarea></textarea>
            <button>Create file!</button>
        </div>
    </div>
  )
}
