import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Slam Out Loud is led by a team of artists, psychologists, educators, and system-builders working to make the inner foundations of a transformational life available to every child in India. Meet our team and partners.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    url: "/about-us",
    title: "About Us | Slam Out Loud",
    description:
      "Meet the team of artists, psychologists, educators, and system-builders behind Slam Out Loud, working to make transformational arts-based learning available to every child in India.",
  },
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
