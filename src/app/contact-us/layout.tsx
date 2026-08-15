import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Slam Out Loud. Partner with us, subscribe to our newsletter, or send us a message — we'd love to hear from you.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    url: "/contact-us",
    title: "Contact Us | Slam Out Loud",
    description:
      "Get in touch with Slam Out Loud. Partner with us, subscribe to our newsletter, or send us a message — we'd love to hear from you.",
  },
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
