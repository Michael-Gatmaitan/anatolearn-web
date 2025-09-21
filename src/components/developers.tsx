const Developers = () => {
  return (
    <div className="w-full body-child-padding py-4 grid gap-4 lg:gap-6 mt-10 md:mt-16 text-white">
      <div className="text-4xl text-center font-titan-one">The Team</div>

      <div className="text-center font-poppins opacity-80">
        If you're a visual learner, AnatoLearn is perfect for you!
      </div>

      <div className="grid lg:grid-cols-4 mt-4 gap-2 text-black">
        <DeveloperCard
          name="Michael"
          position="Fullstack developer"
          imageURL="/images/team/kel.jpeg"
          description="the programmer of the team, responsible for creating database, API, & user interfaces of the website"
        />
        <DeveloperCard
          name="Revo"
          position="Frontend / Documentation"
          imageURL="/images/team/revo.jpg"
          description=""
        />
        <DeveloperCard
          name="John Rhey"
          position="UI Design / Documentation"
          imageURL="/images/team/jear.jpg"
          description=""
        />
        <DeveloperCard
          name="Maui"
          position="Documentation / Diagrams"
          imageURL="/images/team/mawi.jpg"
          description="Lorem ipsum asdasd sit emet asdf;lhjk lkajshdflkjasdh lafksdh fjklh "
        />
      </div>
    </div>
  );
};

const DeveloperCard = ({
  name,
  position,
  imageURL,
  description,
}: {
  name: string;
  position: string;
  imageURL: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-4 grid lg:grid-cols-[auto_1fr] gap-2 rounded-xl lg:justify-start">
      <div className="flex justify-center">
        <img
          src={imageURL}
          alt="Developer"
          className="rounded-full lg:h-20 lg:w-20 bg-red-500 h-32 w-32 object-cover"
        />
      </div>
      <div className="flex flex-col text-center lg:text-left">
        <div className="text-xl font-bold font-poppins">{name}</div>
        <div className="text-sm font-poppins opacity-80">{position}</div>
        <div className="font-poppins opacity-80 mt-2">{description}</div>
      </div>
    </div>
  );
};

export default Developers;
