import { Box, Gamepad2, Target, type LucideProps } from "lucide-react";

const Why = () => {
  return (
    <div
      id="why"
      className="w-full body-child-padding py-4 md:py-8 bg-transparent grid gap-4 md:gap-6 mt-10 md:mt-16 text-white"
    >
      <div className="text-4xl text-center font-titan-one">
        Why use AnatoLearn?
      </div>
      <div className="text-center font-poppins opacity-80">
        If you're a visual learner, AnatoLearn is perfect for you!
      </div>
      <div className="grid gap-2 md:grid-cols-3 md:gap-4 mt-4">
        <WhyCard
          Icon={Box}
          title="3D and AR"
          // description="Learn using interactive 3D models and augmented reality"
          description="Interactive learning using 3D and augmented reality"
        />
        <WhyCard
          Icon={Gamepad2}
          title="Gamified assessments"
          description="Use of 3d models in quiz"
        />
        <WhyCard
          Icon={Target}
          title="Up-to-date lessons"
          description="Aligned with Grade 6 curriculum"
        />
      </div>
    </div>
  );
};

const WhyCard = ({
  Icon,
  title,
  description,
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-black/60 p-6 rounded-lg md:hover:-translate-y-2 transition-transform">
      <div className="grid gap-2 text-center items-center justify-items-center">
        <Icon />
        <div className="text-xl font-bold font-poppins">{title}</div>
      </div>

      <div className="text-center">{description}</div>
    </div>
  );
};

export default Why;
