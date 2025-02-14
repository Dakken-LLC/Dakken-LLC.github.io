import aboutStyles from "./About.module.css";
import commonStyles from "../utils/common.module.css";

import PageMoveTransition from "../utils/PageMoveTransition";
import test from "../assets/test_company.jpg";

export default function MemberPage() {
  return (
    <PageMoveTransition>
      <div className={commonStyles.container}>
        <div className={commonStyles.titleContainer}>
          <img
            className={commonStyles.topImage}
            src={test}
            alt="company-about"
          />
          <div className={commonStyles.topTitle}>
            <p>会社案内</p>
            <p>Company Guide</p>
          </div>
          <div className={commonStyles.mainContent} />
        </div>
      </div>
    </PageMoveTransition>
  );
}
