"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/logo.png";
import { usePathname } from "next/navigation";
import styles from "@/app/style/navbar.module.css";
import {
  XMarkIcon as CloseIcon,
  UserCircleIcon as UserIcon,
  ChevronRightIcon as RightIcon,
  Bars3BottomRightIcon as MenuIcon,
  ArrowLeftStartOnRectangleIcon as LogOutIcon,
} from "@heroicons/react/24/outline";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";

export default function Navbar() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [role, setRole] = useState(null);
  const [isActive, setActive] = useState(false);
  const [profileImg, setProfileImg] = useState(
    "https://static.wikia.nocookie.net/p__/images/b/bf/Sung_Jin-Woo_manhwa_render_cool.webp/revision/latest/scale-to-width-down/250?cb=20230918011835&path-prefix=protagonist"
  );

  const [username, setUsername] = useState("Shadow Monarch");
  const pathname = usePathname();

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const roles = localStorage.getItem("role");
    const approved = localStorage.getItem("isActive");
    if (token && token !== "") {
      setAuth(true);
    } else {
      setAuth(false);
    }
    if (roles && roles !== "") {
      setRole(roles);
    } else {
      setRole("customer");
    }
    if (approved && approved !== "") {
      setActive(approved);
    } else {
      setActive(false);
    }
  }, []);

  const Login = () => {
    router.push("/authentication/login", { scroll: false });
  };

  const logOut = () => {
    toast.success("Your logged out");
  };

  return (
    <div className={styles.NavContainer}>
      <Image
        className={styles.logo}
        src={Logo}
        alt="logo icon"
        height={50}
        priority
      />
      <div className={styles.NavMiddle}>
        <Link
          href="/page/home"
          className={`${styles.LinkContainer} ${
            pathname === "/page/home" ? styles.activeLink : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/page/about"
          className={`${styles.LinkContainer} ${
            pathname === "/page/about" ? styles.activeLink : ""
          }`}
        >
          About
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
        {role !== null && role === "business" ? (
          isActive !== false ? (
            <Link
              href="/page/manage"
              className={`${styles.LinkContainer} ${
                pathname === "/page/manage" ? styles.activeLink : ""
              }`}
            >
              Manage
            </Link>
          ) : (
            <Link
              href="/page/status"
              className={`${styles.LinkContainer} ${
                pathname === "/page/status" ? styles.activeLink : ""
              }`}
            >
              Status
            </Link>
          )
        ) : null}
      </div>
      <MenuIcon
        onClick={() => toggleShow()}
        className={styles.menuIcon}
        alt="Menu icon"
        width={30}
      />
      {/* side nav  */}
      <div
        className={`${styles.sideNav} ${show === true ? styles.sideSlide : ""}`}
      >
        <div className={styles.topsideNav}>
          <CloseIcon
            onClick={() => toggleShow()}
            className={styles.exitIcon}
            alt="Exit icon"
            width={30}
            height={30}
          />
        </div>
        {isAuth ? (
          <div className={styles.profileContainer}>
            <Image
              className={styles.profileImg}
              src={profileImg}
              alt="logo icon"
              height={100}
              width={100}
              priority
            />
            <div className={styles.profileBar}>
              <LogOutIcon
                onClick={() => logOut()}
                className={styles.logOutIcon}
                alt="Exit icon"
                width={34}
                height={34}
              />
              <h1>{username}</h1>
            </div>
          </div>
        ) : (
          <div className={styles.profileContainer}>
            <Image
              className={styles.profileGuestImg}
              src={Logo}
              alt="logo icon"
              height={100}
              width={100}
              priority
            />
            <div className={styles.profileBar}>
              <div onClick={() => Login()} className={styles.profileLogin}>
                <UserIcon
                  className={styles.logInIcon}
                  alt="Exit icon"
                  width={34}
                  height={34}
                />
                <h1>Login now</h1>
              </div>

              <h1>Guest Account</h1>
            </div>
          </div>
        )}
        <div className={styles.sideMidNav}>
          <Link
            href="/page/home"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/home" ? styles.activeLink : ""
            }`}
          >
            Home
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/about"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/about" ? styles.activeLink : ""
            }`}
          >
            About
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/service"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/service" ? styles.activeLink : ""
            }`}
          >
            Service
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          {role !== null && role === "business" ? (
            isActive !== false ? (
              <Link
                href="/page/manage"
                className={`${styles.sideLinkContainer} ${
                  pathname === "/page/manage" ? styles.activeLink : ""
                }`}
              >
                Manage{" "}
                <RightIcon
                  className={styles.arrowIcon}
                  alt="right icon"
                  width={20}
                  height={20}
                />
              </Link>
            ) : (
              <Link
                href="/page/status"
                className={`${styles.sideLinkContainer} ${
                  pathname === "/page/status" ? styles.activeLink : ""
                }`}
              >
                Status{" "}
                <RightIcon
                  className={styles.arrowIcon}
                  alt="right icon"
                  width={20}
                  height={20}
                />
              </Link>
            )
          ) : null}

          <Link
            href="/page/onboarding"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/onboarding" ? styles.activeLink : ""
            }`}
          >
            Onboarding
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/policy"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/policy" ? styles.activeLink : ""
            }`}
          >
            Privacy Policy
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/page/terms"
            className={`${styles.sideLinkContainer} ${
              pathname === "/page/terms" ? styles.activeLink : ""
            }`}
          >
            Terms and Condition
            <RightIcon
              className={styles.arrowIcon}
              alt="right icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      {/* side nav  */}
    </div>
  );
}
