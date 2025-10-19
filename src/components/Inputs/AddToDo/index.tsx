import styles from './index.module.css'

export default function AddToDo() {
  return (
    <div className={styles.wrapper}>
        <form action="#">
            <label>
                <input type="text" />
                <button></button>
            </label>
        </form>
    </div>
  )
}
