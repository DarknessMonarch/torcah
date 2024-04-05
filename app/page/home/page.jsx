"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import AboutPage from "../about/page";
import AdvertPage from "../advert/page";
import ServicePage from "../service/page";
import SubscribePage from "../subscribe/page";
import OnboardingPage from "../onboarding/page";
import styles from "@/app/style/home.module.css";
import TestimonialPage from "../testimonial/page";
import HeroImg from "@/public/assets/heroImg.png";
import AppStoreImg from "@/public/assets/appStore.png";
import GooglePayImg from "@/public/assets/googlePay.png";

export default function HomePage() {
  const googlePay = () => {
    toast.success("Comming soon on playstore");
  };

  const appStore = () => {
    toast.success("Comming soon on appstore");
  };

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.heroContain}>
          <h1>Simplify your life & business with our app</h1>
          <p>
            Tricah not only offers you the ability to Make and get deliveries,
            you can also rent or buy your dream home or car easily and reliably
          </p>
          <div className={styles.heroBtnContainer}>
            <Image
              onClick={() => googlePay()}
              className={styles.appBtn}
              src={GooglePayImg}
              alt="GooglePay btn"
              width={150}
              priority
            />
            <Image
              onClick={() => appStore()}
              className={styles.appBtn}
              src={AppStoreImg}
              alt="AppStore btn"
              width={150}
              priority
            />
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImg}
            src={HeroImg}
            alt="Hero Image"
            priority
          />
        </div>
      </div>
      <AboutPage/>
      <ServicePage/>
      <OnboardingPage/>
      <TestimonialPage/>
      <AdvertPage/>
      <SubscribePage/>
    </div>
  );
}
