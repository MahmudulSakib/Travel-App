import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, idx) => (
              <FooterColumn title={columns.title} key={idx}>
                <ul className="text-[14px] font-[400] flex flex-col gap-4 text-gray-400">
                  {columns.links.map((link, idx) => (
                    <Link href="/" key={idx}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                  <Link
                    href="/"
                    key={idx}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-gray-400">
                      {link.label}:
                    </p>
                    <p className="text-[14px] font-[600] whitespace-nowrap text-blue-300">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="text-[14px] font-[400] flex gap-4 text-gray-400">
                  {SOCIALS.links.map((link, idx) => (
                    <Link href="/" key={idx}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-[#A2A2A2]" />
        <p className="text-[14px] font-[400] w-full text-center text-gray-400">
          2025 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
