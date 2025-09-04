  import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white" : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 animate-pulse text-shadow-lg">
          404
        </h1>
        <p className="text-3xl text-gray-400 dark:text-gray-500 mb-8 italic">
          Lost in the Neurootix?
        </p>
        <Button variant="outline" onClick={handleGoHome}>
          Take me Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
