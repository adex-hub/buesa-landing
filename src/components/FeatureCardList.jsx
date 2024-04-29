import FeatureCard from "./FeatureCard";

function FeatureCardList() {
  const featureCardData = [
    {
      image: "organized.svg",
      title: "Organized Content",
      children:
        "Dive into our well-structured academic resource hub, intuitively sorted by course level and department.",
      cardBackground: "bg-buesa-feature-grey",
    },
    {
      image: "update.svg",
      title: "Up-to-date Materials",
      children:
        "Stay ahead with our continually updated library, offering the latest lecture notes, textbooks, and resources.",
      cardBackground: "bg-buesa-peach-darker",
    },
    {
      image: "search.svg",
      title: "Search Functionality",
      children:
        "Boost your learning journey with our efficient search feature, ensuring quick and precise discovery of courses, materials, or new subjects.",
      cardBackground: "bg-buesa-feature-grey",
    },
  ];

  return (
    <div className="flex items-center w-full justify-center gap-14 xl:gap-20 flex-wrap">
      {featureCardData.map((datum, index) => (
        <FeatureCard
          key={index}
          image={datum.image}
          title={datum.title}
          cardBackground={datum.cardBackground}
        >
          {datum.children}
        </FeatureCard>
      ))}
    </div>
  );
}

export default FeatureCardList;
