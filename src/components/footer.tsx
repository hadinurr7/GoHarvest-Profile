import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTiktok,
  TbBrandLinkedin,
} from "react-icons/tb";
import { BsTelephoneInbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 px-6 md:px-20 pt-10" style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="font-oleo flex items-center pb-6">
        <h1 className="text-3xl font-black text-yellowOrange">Go</h1>
        <h1 className="text-3xl font-black text-green-700">Harvest</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 border-b pb-8 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            Customer Complaint Service
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Rukan Permata Senayan Andriwina Blok C1, JL Tentara Pelajar No 21,
            RT 1 RW 7, Grogol Utara Kebayoran Baru, South Jakarta, DKI Jakarta
            12210
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <BsTelephoneInbound className="mt-1 text-green-700" />
              <div>
                <p className="text-sm md:text-base">
                  +62 811-1254-4293 (For Companies)
                </p>
                <p className="text-sm md:text-base">
                  +62 811-1254-4292 (For Farmers & Partners)
                </p>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-sm font-medium md:text-base">
                Directorate General of Consumer Protection and Business Compliance
              </p>
              <p className="pb-3 text-sm md:text-base">
                Ministry of Trade of the Republic of Indonesia (Ditjen PKTN)
              </p>
              <div className="flex items-start gap-3">
                <BsTelephoneInbound className="mt-1 text-green-700" />
                <p className="text-sm md:text-base">+62 853 1111 1010</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Solutions</h2>
          <div className="flex flex-col gap-2">
            <Link href="#" className="text-sm hover:underline md:text-base">
              For Companies
            </Link>
            <Link href="#" className="text-sm hover:underline md:text-base">
              For Farmers & Partners
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">GoHarvest Head Office</h2>
          <p className="mb-6 text-sm md:text-base">
            Rukan Permata Senayan Andriwina Blok C1, JL Tentara Pelajar No 21,
            RT 1 RW 7, Grogol Utara Kebayoran Baru, South Jakarta, DKI Jakarta
            12210
          </p>

          <h2 className="mb-4 text-xl font-semibold">Visit Us</h2>
          <div className="flex gap-5">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <TbBrandFacebook className="text-3xl text-gray-600 transition duration-300 hover:text-green-700" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <TbBrandInstagram className="text-3xl text-gray-600 transition duration-300 hover:text-green-700" />
            </Link>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TbBrandTiktok className="text-3xl text-gray-600 transition duration-300 hover:text-green-700" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin className="text-3xl text-gray-600 transition duration-300 hover:text-green-700" />
            </Link>
          </div>
        </div>
      </div>

      <div className="py-6">
        <h3 className="text-sm text-gray-500 md:text-base">
          © 2024 GoHarvest. All rights reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
