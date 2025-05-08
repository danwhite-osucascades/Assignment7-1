import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment 5-2",
  description: "Does Dan even check this?????",
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
