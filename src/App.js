import "./App.css";
import useLocalStorage from "use-local-storage";
import { useCallback, useMemo, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AboutSection from "./components/AboutSection";
import NavigationBar from "./components/NavigationBar";
import HeaderSection from "./components/HeaderSection";
import ParticlesBg from "particles-bg";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

const currentYear = new Date().getFullYear();

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const styles = useMemo(() => {
    const isDark = theme === "dark";
    return {
      textColor: isDark ? "text-light" : "text-dark",
      accentTextColor: isDark ? "#DCDDDE" : "#49525C",
      bgColor: isDark ? "bg-dark" : "bg-light",
      accentColor: isDark ? "#49525B" : "#E5E6E7",
      smallLinkStyle: ` small-text ${
        isDark ? "dark-nav-link" : "light-nav-link"
      }`,
      medLinkStyle: `med-text mono-font ${
        isDark ? "dark-nav-link" : "light-nav-link"
      }`,
      particleBgColor: isDark ? "#212529" : "#F4F7FA",
    };
  }, [theme]);

  const switchTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    document.body.style.background =
      newTheme === "dark" ? "#212529" : "#F4F7FA";
  }, [theme, setTheme]);

  const [height, setHeight] = useState("100%");

  useEffect(() => {
    const isDark = theme === "dark";

    document.body.style.background = isDark ? "#212529" : "#F4F7FA";

    const handleResize = (e) => {
      setHeight(window.document.body.scrollHeight);
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
    }, 500);
    // cleanup this component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`vh-100`}
      style={{
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <ParticlesBg
        id="tsparticles"
        className="blurred"
        type="cobweb"
        color={"#EC4578"}
        bg={{
          position: "absolute",
          width: " 100%",
          height: height,
          pointerEvents: "none",
          zIndex: -1,
          display: "block",
          top: 0,
          left: 0,
          backgroundColor: styles.particleBgColor,
        }}
      />
      <div>
        <NavigationBar
          theme={theme}
          switchTheme={switchTheme}
          styles={styles}
        />
        <Container style={{ zIndex: 1020, paddingBottom: 50 }}>
          <HeaderSection theme={theme} styles={styles} />
          <AboutSection theme={theme} styles={styles} />
          <ExperienceSection theme={theme} styles={styles} />
          <ProjectsSection theme={theme} styles={styles} />
          <TestimonialsSection theme={theme} styles={styles} />
          <ContactSection styles={styles} />
          <footer
            className={`text-center mt-5 mono-font`}
            style={{ color: styles.accentTextColor }}
          >
            Alexander Rabin © {currentYear}
          </footer>
        </Container>
      </div>
    </div>
  );
}

export default App;
