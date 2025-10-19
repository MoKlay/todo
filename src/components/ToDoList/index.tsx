import classNames from "classnames";
import styles from "./index.module.css";
import Task from "./Tasks";

export default function ToDoList() {
  return (
    <div className={styles.container}>
      <ul className={classNames(styles.list, styles.failed)}>
        <Task title="Первая задача"/>
      </ul>
      <ul className={classNames(styles.list, styles.completed)}>
        <Task title="Вторая задача"/>
      </ul>
    </div>
  );
}
