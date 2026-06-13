import "../src/styles.css";
import "../src/panel-overrides.css";

export const metadata = {
  title: "KYOOBS",
  description: "A digital exhibition interface for the World of Formation.",
  icons: {
    icon: "/assets/website-elements/Kyoobs-icon-favicon.svg",
    shortcut: "/assets/website-elements/Kyoobs-icon-favicon.svg",
    apple: "/assets/website-elements/Kyoobs-icon-favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
