import "@styles/globals.css";
import NavBar from "@components/NavBar";

export const metadata = {
  titile: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
