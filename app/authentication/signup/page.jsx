"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import styles from "@/app/style/auth.module.css";

import {
  KeyIcon as PasswordIcon,
  UserIcon as UserNameIcon,
  EyeIcon as ShowPasswordIcon,
  BriefcaseIcon as BusinessIcon,
  EyeSlashIcon as HidePasswordIcon,
} from "@heroicons/react/24/outline";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth, toggleAuth } = useAuthStore();
  const [terms, setTerms] = useState(false);
  const [role, setRole] = useState("Business"); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  const handleTermsChange = (event) => {
    setTerms(event.target.checked);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
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

  const forgotPassword = () => {
    router.push("forgot", { scroll: false });
  };

  const Login = () => {
    router.push("login", { scroll: false });
  };


  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${SERVER_API}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      router.push("/page/dashboard");
      toast.success("Account created successfully! ");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTerms(false); 
    } catch (error) {
      if (error.response === 400) {
        toast.error(error.message);
      }
      toast.error('Invalid credentials')
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
          alt="signup Image"
          quality="100"
          objectFit="contain"
        />
      </div>
      <div className={styles.authWrapper}>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Onboard your <span>{role}</span> </h1>
            <p>Enter account details</p>
          </div>
          {/* Username */}

          <div className={styles.authInput}>
            <UserNameIcon
              className={styles.authIcon}
              alt="Username icon"
              width={20}
              height={20}
            />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
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
          {/* confirm password */}

          <div className={styles.authInput}>
            <PasswordIcon
              className={styles.authIcon}
              alt="confirm password"
              width={20}
              height={20}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              className={styles.showBtn}
              onClick={toggleConfirmPassword}
            >
              {showConfirmPassword ? (
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
          <BusinessIcon
                  className={styles.authIcon}
                  width={20}
                  height={20}
                />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.roleSelect}
            >
              <option value="business">Add your Business</option>
              <option value="House">Add your House</option>
              <option value="Car">Add your Car</option>
              <option value="Driver">Add your store</option>
            </select>
          </div>
          <div className={styles.formChange}>
            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={handleTermsChange}
              />
              <label htmlFor="terms">Accept terms and condition</label>
            </div>
            <span onClick={forgotPassword}>Forgot Password</span>
          </div>
          <div className={styles.authBottomBtn}>
            <button
              type="submit"
              disabled={isLoading}
              className={styles.formAuthButton}
            >
              {isLoading ? <Loader /> : "Sign up"}
            </button>
            <p>
              <span onClick={readTerms}>Terms and Condition</span> &{" "}
              <span onClick={policy}> Privacy Policy</span>{" "}
            </p>
          </div>
          <h3>
            Already have an account?{" "}
            <div className={styles.btnLogin} onClick={Login}>
              Login
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
}