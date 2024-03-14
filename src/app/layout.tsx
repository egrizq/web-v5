import "../app/styles.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Welcome!</title>
        <body className="font-mono">{children}</body>
    </html>
  );
}
