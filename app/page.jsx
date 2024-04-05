"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation"
import LogoIcon from "@/public/icons/logo.svg";
import styles from "@/app/style/loading.module.css";

export default function App() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/page/home"); 
    }, 3000); 
    return () => clearTimeout(timeout); 
  }, [router]);

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
