import { About } from "sections/About/About";
import { Contact } from "sections/Contact/Contact";
import { Experience } from "sections/Experience/Experience";
import { Header } from "sections/Header/Header";
import { Hero } from "sections/Hero/Hero";
import { Projects } from "sections/Projects/Projects";
import { TechStack } from "sections/TechStack/TechStack";
import { LocaleProvider } from "i18n/LocaleProvider";

export default function App() {
  return (
    <LocaleProvider>
      {/* overflow-x-clip rather than -hidden: `clip` does not create a scroll
          container, so the decorative glows stay clipped while the sticky
          header keeps sticking to the viewport. */}
      <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </LocaleProvider>
  );
}
