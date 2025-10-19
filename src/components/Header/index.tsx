import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <a href="#">ToDo</a>
        </div>
    </header>
  )
}
