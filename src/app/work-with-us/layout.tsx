import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Join Team SOL. Become a fellow, volunteer, or explore open roles at Slam Out Loud and help bring transformational arts-based education to children across India.",
  alternates: {
    canonical: "/work-with-us",
  },
  openGraph: {
    url: "/work-with-us",
    title: "Work With Us | Slam Out Loud",
    description:
      "Become a fellow, volunteer at SOL, or explore open roles helping bring arts-based, social-emotional learning to children across India.",
    images: [
      {
        url: "/work-with-us/team_sol.png",
        width: 1200,
        height: 630,
        alt: "Join Team SOL - Slam Out Loud",
      },
    ],
  },
  twitter: {
    images: ["/work-with-us/team_sol.png"],
  },
};

export default function WorkWithUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
