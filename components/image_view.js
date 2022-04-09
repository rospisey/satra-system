import Image from "next/image";
import styles from "../styles/card.module.css";
export default function IndexPage(props) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.imagecomonentcard}
        width="300px"
        height="200px"
        {...props} // help to spread oprate to use all props values
      />
      <h2>Card here </h2>
      <p> lorem ipsum here now to get here </p>
    </div>
  );
}