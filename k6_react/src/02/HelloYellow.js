import styles from './HelloYellow.module.css'
import { FaMusic } from "react-icons/fa";

export default function HelloYellow() {
  return (
    <h1 className={styles.ch1}>
        안녕하세요.
        <FaMusic />
    </h1>
  )
}
