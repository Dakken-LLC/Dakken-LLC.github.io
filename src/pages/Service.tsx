import styles from "./Service.module.css";
import PageMoveTransition from "../utils/PageMoveTransition";
import test from "../assets/test_service.jpg";

export default function MemberPage() {
  return (
    <PageMoveTransition>
      <div className={styles.container}>
        <img className={styles.topImage} src={test} alt="company-about" />
      </div>
    </PageMoveTransition>
  );
}
