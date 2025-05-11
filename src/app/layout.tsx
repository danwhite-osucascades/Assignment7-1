import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment 7-1",
  description: "Use Context, WOOHOO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
