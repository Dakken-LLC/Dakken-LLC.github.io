import styles from "./Service.module.css";
import PageMoveTransition from "../utils/PageMoveTransition";

export default function MemberPage() {
  return (
    <PageMoveTransition>
      <div className={styles.container}>
        <img
          className={styles.topImage}
          src="https://picsum.photos/2000/1000"
          alt="company-about"
        />
      </div>
    </PageMoveTransition>
  );
}
