import type { Lang } from "@/content/i18n";
import { getContent } from "@/content/i18n";
import { ContentProvider } from "./ContentProvider";
import Header from "./Header";
import Hero from "./Hero";
import Dates from "./Dates";
import WhyAttend from "./WhyAttend";
import Specials from "./Specials";
import Schools from "./Schools";
import Specialists from "./Specialists";
import Videos from "./Videos";
import About from "./About";
import Partner from "./Partner";
import Move from "./Move";
import Testimonials from "./Testimonials";
import PhotoStrip from "./PhotoStrip";
import { FinalCta, Offices, Footer } from "./Closing";
import ScrollControls from "./ScrollControls";

// Section order — rearrange or comment out lines to change the page.
export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <ContentProvider lang={lang} content={getContent(lang)}>
      <Header />
      <main>
        <Hero />
        <WhyAttend />
        <Specials />
        <FinalCta />
        <Schools />
        <Specialists />
        <About />
        <Partner />
        <Move />
        <Testimonials />
        {/* Previous EXPO highlights */}
        <Videos />
        <Dates />
        <PhotoStrip />
        <Offices />
      </main>
      <Footer />
      <ScrollControls />
    </ContentProvider>
  );
}
