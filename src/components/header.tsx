import { toast } from "sonner";
import { Button } from "./ui/button";
import { Download, PlayCircle } from "lucide-react";

const Header = () => {
  const onDownloadClick = () => {
    toast("Downloading, please wait 🫁");
  };

  return (
    <div id="home" className="place-items-center py-12 md:py-24 px-4 h-[calc(100vh-74px)] md:h-[60vh] flex flex-col justify-between">
      {/* <div className="relative"> */}
      {/* </div> */}

      <div className="relative z-10">
        <div className="font-titan-one text-6xl text-white text-center">
          Explore the Human Body in
          <br />
          3D &amp; AR
        </div>
        <div className="font-poppins mt-6 max-w-3xl text-xl text-white text-center">
          AnatoLearn makes learning human body system engaging through
          interactive 3D models and augmented reality.
        </div>

        <div className="flex mt-6 items-center justify-center gap-2">
          <Button
            size="lg"
            variant="secondary"
            asChild
            onClick={onDownloadClick}
          >
            <a href="/apk/AnatoLearn.apk" download>
              <Download />
              Download for android
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-5">
            <PlayCircle />
            Live demo
          </Button>
        </div>
      </div>

      <div className="text-white text-sm opacity-60">
        Only for android devices
      </div>
    </div>
  );
};

export default Header;
