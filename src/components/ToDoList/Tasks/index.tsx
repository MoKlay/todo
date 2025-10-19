import styles from "./index.module.css";

interface PropsTask {
  title: string;
}

export default function Task({ title }: PropsTask) {
  return (
    <li className={styles.wrapper}>
      <span>{title}</span>
      <div className={styles.buttons}>
        <button className={styles.trash}></button>
        <button className={styles.check}></button>
      </div>
    </li>
  );
}
