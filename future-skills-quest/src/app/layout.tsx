export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
