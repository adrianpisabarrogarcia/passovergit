import styles from '../styles/SiteImage.module.css'

import Image from "next/image"




export default function SiteImage() {
  return (
    <div className={styles.divContent}>
        <Image src="/img/octupus.svg" alt="Octupus" width={400} height={400} />
    </div>
  )
}
