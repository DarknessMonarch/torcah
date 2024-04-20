"use client";

import styles from "@/app/style/success.module.css";

import {
  CheckCircleIcon as PassIcon,
  ExclamationTriangleIcon as FailIcon,
} from "@heroicons/react/24/outline";

export default function SuccessPage() {
  const [approved, setapproved] = useState(false);

  const toggleApproved= () => {
    setapproved(!approved);
  }

  return (
    <div className={styles.sucessComponent}>
      {approved != false ? (
        <div className={styles.checkComponent}>
          <PassIcon
            className={styles.CheckIcon}
            alt="Check icon"
            width={40}
            height={40}
          />
          <p>Your account is approved, login to the app</p>
        </div>
      ) : (
        <div className={styles.checkComponent}>
          <FailIcon
            className={styles.CheckIcon}
            alt="Check icon"
            width={40}
            height={40}
          />
          <p>Your account is not approved</p>
        </div>
      )}
    </div>
  );
}
