"use client";

import { useEffect, useState } from "react";
import styles from "@/app/style/success.module.css";

import {
  CheckCircleIcon as PassIcon,
  ExclamationTriangleIcon as FailIcon,
} from "@heroicons/react/24/outline";

export default function SuccessPage() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const approved = localStorage.getItem("isActive");
    if (approved && approved !== "") {
      setActive(approved);
    } else {
      setActive(false);
    }
  }, []);


  return (
    <div className={styles.sucessComponent}>
      {isActive !== false ? (
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
