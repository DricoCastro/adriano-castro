import { HomeHolder } from "./styles";
import { CertificatesSection } from "./views/CertificatesSection";
import { LetsTalkSection } from "./views/LetsTalkSection";
import { MeSection } from "./views/MeSection";
import { ProjectsSection } from "./views/ProjectsSection";
import { WhyMeSection } from "./views/WhyMeSection";

export default function HomePage() {
  return (
    <HomeHolder>
      <MeSection />
      <ProjectsSection />
      <CertificatesSection />
      <WhyMeSection />
      <LetsTalkSection />
    </HomeHolder>
  );
}
