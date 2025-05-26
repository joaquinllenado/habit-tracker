import Hero from "@/components/landing/hero";
import FeatureCard from "@/components/landing/feature-card";

const features = [
  {
    title: "Track Your Habits",
    description: "Easily create, view, and manage your daily habits with a simple and intuitive interface.",
  },
  {
    title: "Visualize Your Progress",
    description: "See your streaks, completions, and progress over time to stay motivated and accountable.",
  },
  {
    title: "Personalized Experience",
    description: "Sign up, log in, and access your own dashboard with habits and stats unique to you.",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-40 w-full h-full max-w-6xl p-5">
      <Hero />
      <div className="flex flex-col lg:flex-row gap-5 mb-32 lg:mb-0">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}
