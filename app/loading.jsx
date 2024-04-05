import styles from "@/app/style/loading.module.css";
import LogoIcon from "@/public/icons/logo.svg";
import Image from "next/image";
export default function Loading() {
  return (
    <div className={styles.loadingComponent}>
      <div className={styles.loaderHome}>
        <Image
          className={styles.logoHome}
          src={LogoIcon}
          alt="logo icon"
          width={50}
          height={50}
          priority
        />
        <span className={styles.loader}>Torcah</span>
      </div>
    </div>
  );
}
