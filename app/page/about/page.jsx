"use client";
import Image from "next/image";
import styles from "@/app/style/about.module.css";
import AboutImage from "@/public/assets/about.png";
import {
  UserGroupIcon as ReliableIcon,
  CheckBadgeIcon as AffordableIcon,
  GlobeAsiaAustraliaIcon as AccessibleIcon,
  ShieldCheckIcon as SecureIcon,
} from "@heroicons/react/24/outline";

const aboutInfo = [
  {
    id: 1,
    icon: AffordableIcon,
    title: "Affordable",
    about: "Easily afford any services you need",
  },
  {
    id: 2,
    icon: AccessibleIcon,
    title: "Accessible",
    about: "Easily accessible by anyone and anywhere",
  },
  {
    id: 3,
    icon: ReliableIcon,
    title: "Reliable",
    about: "Your need is our priority",
  },
  {
    id: 4,
    icon: SecureIcon,
    title: "Secure",
    about: "Your need is our priority",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <Image
          className={styles.aboutImg}
          src={AboutImage}
          alt="About Image"
          priority
        />
      </div>
      <div className={styles.aboutInfo}>
        <div className={styles.aboutInfoTop}>
          <h4>Why Choose Us?</h4>
          <h1>Enjoy conveniency with us</h1>
        </div>

        <div className={styles.aboutInfoContainer}>
          {aboutInfo.map((info, index) => (
            <div className={styles.infoAboutContainer} key={index}>
              <div className={styles.infoAboutIcon}>
                <info.icon
                  className={styles.aboutIcon}
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.infoAboutWrapper}>
                <h1>{info.title}</h1>
                <p>{info.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
