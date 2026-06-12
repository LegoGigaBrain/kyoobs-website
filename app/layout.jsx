import "../src/styles.css";
import "../src/panel-overrides.css";

export const metadata = {
  title: "KYOOBS",
  description: "A digital exhibition interface for the World of Formation."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
