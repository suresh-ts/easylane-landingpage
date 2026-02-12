import "./globals.css";

export const metadata = {
  title: "Easy Lane - Fleet Optimization",
  description:
    "Easy Lane empowers fleet owners, promotes entrepreneurship, and optimizes logistics across India with tech-driven solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="dD5UO5kDigztvM2NgXBSC-JyvLqBZFdyAJ64sJJVcVE"
        />
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
