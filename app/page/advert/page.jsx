"use client";
import Image from "next/image";
import styles from "@/app/style/advert.module.css";
import AdvertInage from "@/public/assets/advert.png";


export default function AdvertPage() {

  return (
    <div className={styles.advertContainer}>
        <Image
          className={styles.heroImg}
          src={AdvertInage}
          alt="Advert Image"
          priority
        />
    </div>
  );
}
