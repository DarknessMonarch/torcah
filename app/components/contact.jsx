"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import TelegramIcon from "@/public/icons/telegram.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import WhatsappIcon from "@/public/icons/whatsapp.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import styles from "@/app/style/contact.module.css";
import AppStoreImg from "@/public/assets/appStore.png";
import GooglePayImg from "@/public/assets/googlePay.png";

import {
  PhoneIcon,
  MapPinIcon as LocationIcon,
  EnvelopeIcon as MailIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const pathname = usePathname();

  const openWhatsapp = () => {
    window.open(
      "https://wa.me/+1(484)744-0421?text=Hi welcome to torcah",
      "_blank"
    );
  };

  const openIos = () => {
    window.open("https://itunes.apple.com/app/idYOUR_APP_ID", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/torcah", "_blank");
  };

  const openAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME",
      "_blank"
    );
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=123", "_blank");
  };

  const openTwitter = () => {
    window.open(
      "https://twitter.com/torcah_?s=21&t=ordgrMn8HjrBLUy3PdpsBA",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open(
      "https://instagram.com/torcah_?igshid=MTIzZWMxMTBkOA==",
      "_blank"
    );
  };

  const openYoutube = () => {
    window.open("https://www.youtube.com/@torcah", "_blank");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactPart}>
          <h1>Torcah</h1>
          <p>Enjoy amaizing services with us on a daily basis</p>
          <div className={styles.appLinks}>
            <Image
              onClick={() => openAndroid()}
              className={styles.appLinksBtn}
              src={GooglePayImg}
              alt="GooglePay btn"
              width={120}
              priority
            />
            <Image
              onClick={() => openIos()}
              className={styles.appLinksBtn}
              src={AppStoreImg}
              alt="AppStore btn"
              width={120}
              priority
            />
          </div>
          <div className={styles.contactIcons}>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openFacebook()}
                className={styles.socialIcons}
                src={FacebookIcon}
                alt="social icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openInstagram()}
                className={styles.socialIcons}
                src={InstagramIcon}
                alt="social icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openTelegram()}
                className={styles.socialIcons}
                src={TelegramIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>
            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openTwitter()}
                className={styles.socialIcons}
                src={TwitterIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>

            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openWhatsapp()}
                className={styles.socialIcons}
                src={WhatsappIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>

            <div className={styles.contactIconsP}>
              <Image
                onClick={() => openYoutube()}
                className={styles.socialIcons}
                src={YoutubeIcon}
                alt="socialIcons icon"
                height={30}
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.contactPart}>
          <h1>Links</h1>
          <Link
            href="/page/about"
            className={`${styles.LinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            Service
          </Link>
          <Link
            href="/page/service"
            className={`${styles.LinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Service
          </Link>
          <Link
            href="/page/onboarding"
            className={`${styles.LinkContainer} ${
              pathname === "/page/onboarding" ? styles.activeLink : ""
            }`}
          >
            Onboarding
          </Link>
          <Link
            href="/page/policy"
            className={`${styles.LinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.LinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
          </Link>
        </div>
        <div className={styles.contactPart}>
          <h1>contact</h1>
          <div className={styles.contactInfoWrapper}>
            <div className={styles.contactInfo}>
              <LocationIcon
                className={styles.arrowIcon}
                alt="location icon"
                width={24}
                height={24}
              />
              <h4>Usa</h4>
            </div>
            <div className={styles.contactInfo}>
              <PhoneIcon
                className={styles.arrowIcon}
                alt="phone icon"
                width={24}
                height={24}
              />
              <h4>+1(484)744-0421</h4>
            </div>
            <div className={styles.contactInfo}>
              <MailIcon
                className={styles.arrowIcon}
                alt="email icon"
                width={24}
                height={24}
              />
              <h4>contact@torcah.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h4>Torcah©2024 all right reserved</h4>
      </div>
    </div>
  );
}
