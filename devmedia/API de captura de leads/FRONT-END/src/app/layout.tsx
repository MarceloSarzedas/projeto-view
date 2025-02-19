import type { Metadata } from "next";
import styles from "./page.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadastro de Leads",
  description: "Front-end do Cadastro de Leads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
