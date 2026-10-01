import CourseExplorer from "@/components/modules/homepage/CourseExplorer";
import CreatorCTASection from "@/components/modules/homepage/CreatorCTASection";
import GrowthAndCreationSections from "@/components/modules/homepage/GrowthAndCreationSections";
import HeroSection from "@/components/modules/homepage/Hero";
import LearningPaths from "@/components/modules/homepage/LearningPaths";
import LogoMarquee from "@/components/modules/homepage/LogoMarquee";
import TestimonialsSection from "@/components/modules/homepage/Testimonial";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <LogoMarquee />
      <CourseExplorer />
      <LearningPaths />
      <GrowthAndCreationSections />
      <CreatorCTASection />
      <TestimonialsSection />
    </div>
  );
}
