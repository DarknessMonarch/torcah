import { Toaster } from "react-hot-toast";
import { Lato } from "next/font/google";
import "@/app/style/global.css";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://torcah.vercel.app"),
  title: "Torcah",
  applicationName: "Torcah",
  author: "Torcah",
  images: "https://raw.githubusercontent.com/zero-stealth/torcah/master/public/assets/banner.png",
  description:
    "Streamline Your Delivery, Car Sales, and House Transactions for Seamless Experiences",
    metadataBase: new URL("https://torcah.vercel.app"),
    keywords: [
    "buy car",
    "sell car",
    "rent property",
    "sell property",
    "buy property",
    "delivery",
    "food delivery",
    "shopping",
    "shopping delivery",
  ],
  openGraph: {
    title: "Torcah",
    description:
      "Streamline Your Delivery, Car Sales, and House Transactions for Seamless Experiences",
    url: "https://torcah.vercel.app/",
    siteName: "Torcah",
    images: "https://raw.githubusercontent.com/zero-stealth/torcah/master/public/assets/banner.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={lato.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 8000,
            style: {
              background: "#ffff",
              color: "#5CB85C",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
