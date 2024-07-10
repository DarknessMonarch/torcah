"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import styles from "@/app/style/join.module.css";
import { useState, useEffect, useRef } from "react";
import {
  CameraIcon,
  PhoneIcon,
  GlobeAltIcon as WebsiteIcon,
  BookOpenIcon as DescriptionIcon,
  KeyIcon as PasswordIcon,
  BriefcaseIcon as BusinessIcon,
  EnvelopeIcon as EmailIcon,
  MapPinIcon as LocationIcon,
} from "@heroicons/react/24/outline";

const FileInput = ({ onChange, idImage, fieldName }) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.formChangeUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={fileInputRef}
        name={fieldName}
        style={{ display: "none" }}
      />
      <div className={styles.AdsSection}>
        {idImage === null ? (
          <div className={styles.uploadCameraIcon} onClick={handleIconClick}>
            <CameraIcon
              className={styles.CameraIcon}
              alt="Camera Icon"
              width={30}
              height={30}
            />
          </div>
        ) : (
          <Image
            src={idImage}
            alt="Id Image"
            className={styles.IdImage}
            layout="fill"
            quality={100}
            objectFit="cover"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default function Join() {
  const [imageUrls, setImageUrls] = useState([null, null, null]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "") {
      setToken(token);
    } else {
      setToken(null);
    }
  }, []);

  const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append(
        "business_name",
        event.target.elements.business_name.value
      );
      formData.append(
        "business_category",
        event.target.elements.business_category.value
      );
      formData.append("phoneNumber", event.target.elements.phoneNumber.value);
      formData.append("password", event.target.elements.password.value);
      formData.append(
        "business_description",
        event.target.elements.business_description.value
      );
      formData.append(
        "business_website",
        event.target.elements.business_website.value
      );
      formData.append(
        "profile_image",
        event.target.elements.profile_image.files[0]
      );
      formData.append(
        "return_policy",
        event.target.elements.return_policy.files[0]
      );
      formData.append(
        "business_terms",
        event.target.elements.business_terms.files[0]
      );

      const response = await fetch(`${SERVER_API}/business/register`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      toast.success("Onboarded successfully");
    } catch (error) {
      console.error(error);
      toast.error("Onboarding failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = imageUrl;
      setImageUrls(newImageUrls);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <div className={styles.formHeader}>
        <button type="submit" disabled={isLoading} className={styles.formbtn}>
          {isLoading ? <Loader /> : "Submit"}
        </button>
      </div>
      <div className={styles.formContainerInner}>
        <div className={styles.ContainSide}>
          {/* business name */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>business name </label>
            <div className={styles.formInput}>
              <BusinessIcon
                className={styles.formInputIcon}
                alt="business icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="business_name"
                id="business_name"
                placeholder="Business name"
              />
            </div>
          </div>
          {/* Business Category */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Business Category </label>
            <div className={styles.formInput}>
              <BusinessIcon
                className={styles.formInputIcon}
                alt="business category icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="business_category"
                id="business_category"
                placeholder="Electronics sales"
              />
            </div>
          </div>
          {/* Contact */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Contact </label>
            <div className={styles.formInput}>
              <PhoneIcon
                className={styles.formInputIcon}
                alt="contact icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+ (countrycode) number"
              />
            </div>
          </div>
          {/* Password */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Password </label>
            <div className={styles.formInput}>
              <PasswordIcon
                className={styles.formInputIcon}
                alt="password icon"
                width={24}
                height={24}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
              />
            </div>
          </div>
          {/* Business Description */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Business Description </label>
            <div className={styles.formInput}>
              <DescriptionIcon
                className={styles.formInputIcon}
                alt="business description icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="business_description"
                id="business_description"
                placeholder="The business deals with computers, and other computer accessories"
              />
            </div>
          </div>
          {/* Business Website */}
          <div className={styles.formInputContainer}>
            <label className={styles.formLabel}>Business Website </label>
            <div className={styles.formInput}>
              <WebsiteIcon
                className={styles.formInputIcon}
                alt="business website icon"
                width={24}
                height={24}
              />
              <input
                type="text"
                name="business_website"
                id="business_website"
                placeholder="www.knk.com"
              />
            </div>
          </div>
        </div>
        <div className={styles.ContainSideTwo}>
          <div className={styles.ContainSideInner}>
            {[1, 2, 3].map((index) => (
              <div key={index} className={styles.SideInner}>
                <label className={styles.formLabel}>
                  {index === 1
                    ? "Business Logo"
                    : index === 2
                    ? "Return Policy"
                    : "Business Terms"}
                </label>
                <FileInput
                  onChange={(e) => handleImageUpload(e, index - 1)}
                  idImage={imageUrls[index - 1]}
                  fieldName={
                    index === 1
                      ? "profile_image"
                      : index === 2
                      ? "return_policy"
                      : "business_terms"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
