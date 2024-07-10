"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import styles from "@/app/style/auth.module.css";

import {
  KeyIcon as PasswordIcon,
  EnvelopeIcon as EmailIcon,
  EyeIcon as ShowPasswordIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("customer");
  const [terms, setTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const policy = () => {
    router.push("/page/policy", { scroll: false });
  };

  const readTerms = () => {
    router.push("/page/terms", { scroll: false });
  };

  const Onboard = () => {
    router.push("/page/onboarding", { scroll: false });
  };

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_API}/${role}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const token = data.token;
      const roleID = data.role.id;
      const active =data.enabled;
      localStorage.setItem("token", token);
      localStorage.setItem("roleID", roleID);
      localStorage.setItem("role", role);
      localStorage.setItem("isActive", active);

      if(role == "business") {
        router.push("/page/manage", { scroll: false });

      } else {
        router.push("/page/home", { scroll: false });

      }
      localStorage.setItem("isAuth", true);
      toast.success("Welcome back! ");
      setFormData({
        email: "",
        password: "",
      });
      setTerms(false);
    } catch (error) {
      if (error.response === 400) {
        toast.error(error.message);
      } else if (error.response === 404) {
        toast.error("User not found");
      } else {
        toast.error("Invalid credentials");
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.authComponent}>
      <div className={styles.authComponentBgImage}>
        <Image
          src={logo}
          alt="Onboard Image"
          quality="100"
          objectFit="contain"
        />
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>
              Login as a <span>{role}</span>
            </h1>
            <p>Enter your account details</p>
          </div>
          {/* Email */}
          <div className={styles.authInput}>
            <EmailIcon
              className={styles.authIcon}
              alt="Enail icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          {/*  password */}

          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="password icon"
              width={20}
              height={20}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              id="Password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className={styles.showBtn}
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HidePasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              ) : (
                <ShowPasswordIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
          {/* Role dropdown */}
          <div className={styles.authInput}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.roleSelect}
            >
              <option value="customers">Customer</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className={styles.termsContainer}>
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">Accept terms and condition</label>
          </div>
          <div className={styles.authBottomBtn}>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.formAuthButton}
            >
              {isLoading ? <Loader /> : "Login"}
            </button>
            <p>
              <span onClick={readTerms}>Terms and Condition</span> &{" "}
              <span onClick={policy}> Privacy Policy</span>{" "}
            </p>
          </div>
          <h3>
             Onboard your business?{" "}
            <div className={styles.btnLogin} onClick={Onboard}>
              OnBoard
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
}
