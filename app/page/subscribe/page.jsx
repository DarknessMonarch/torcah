"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "@/app/style/subscribe.module.css";


export default function SubscribePage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setEmail(email);
      toast.success("You have successfully subscribed!");
    } else {
      toast.error("Please enter an email address.");
    }
  };

  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribeInfo}>
        <div className={styles.subscribeInfoTop}>
          <h1>Subscribe For App Announcements</h1>
          <p>
            Be the first to get updates about our apps from new release to
            updates and changes
          </p>
        </div>
          <form  className={styles.subscribeInput} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
      </div>
    </div>
  );
}