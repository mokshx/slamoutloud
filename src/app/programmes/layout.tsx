import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "Explore Slam Out Loud's flagship programmes: Arts for All (AFA), bringing arts education into government schools across Punjab, Maharashtra, and Bihar, and the Jijivisha Fellowship, placing art educators in classrooms across Delhi, Bengaluru, Mumbai, and Pune.",
  alternates: {
    canonical: "/programmes",
  },
  openGraph: {
    url: "/programmes",
    title: "Our Programmes | Slam Out Loud",
    description:
      "Discover Arts for All and the Jijivisha Fellowship, Slam Out Loud's programmes bringing arts-based, social-emotional learning to children across India.",
  },
};

export default function ProgrammesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
