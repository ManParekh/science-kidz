import Image from "next/image";
import { FooterItem } from "./footer-item";
import Link from "next/link";

const footerData = [
  {
    label: "CONTACT INFO",
    items: [
      <>
        <h4 className="text-black">Phone</h4>
        +91 00000 00000
      </>,
      <>
        <h4 className="text-black">Email</h4>
        example@mail.com
      </>,
    ],
  },
  {
    label: "CUSTOMER CARE",
    items: ["About us", "Contact", "My Account"],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#080b28] to-[#020b70] mt-20 w-full text-white text-sm md:text-sm xl:text-base flex flex-col-reverse md:flex-row justify-center items-center gap-1 md:gap-28 md:p-2 p-3">
      <p className="text-center">
        Copyright © 2024 ScienceKidz, All Rights Reserved
      </p>
      <ul className="flex justify-center items-center md:gap-5 gap-1 flex-col md:flex-row">
        <li className="flex gap-2 justify-center items-center">
          <Image
            src={"/email-svgrepo-com.svg"}
            alt="Email"
            width={25}
            height={25}
          />{" "}
          info@sciencekidz.in
        </li>
        <li className="flex justify-center items-center">
          <Image
            src={"/call-svgrepo-com.svg"}
            alt="Call"
            width={30}
            height={30}
          />
          +91 77770 81677
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-5 md:pb-0 pb-2">
        <li>
          <Link target="_blank" href={"https://www.youtube.com/@ScienceKidz"}>
            <Image
              src={"/youtube-168-svgrepo-com.svg"}
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://wa.me/+917777081677"}>
            <Image
              src={"/whatsapp-svgrepo-com.svg"}
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://www.instagram.com/science.kidz"}>
            <Image
              src={"/instagram-svgrepo-com.svg"}
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://www.facebook.com/scikidz"}>
            <Image
              src={"/facebook-svgrepo-com.svg"}
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
