import Nav from "./components/nav";
import Header from "./components/header";
// import { Toaster } from "./components/ui/sonner";
import { Toaster } from "sonner";
import Why from "./components/why";
// import DisplayModel from "./components/display-model";
import EmailForm from "./components/email-form";
import Dashboard from "./components/dashboard";
import Developers from "./components/developers";

function App() {
  return (
    // bg-[#3654EA]
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#3654EA",
        backgroundImage: `
     linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      }}
    >
      <img
        src="/svg/Skull.svg"
        className="absolute top-[10vh] left-[20vw] opacity-50 -rotate-25"
      />

      <img
        src="/svg/Heart.svg"
        className="absolute top-[380px] left-[10vw] opacity-50 -rotate-15"
      />

      <img
        src="/svg/Lungs.svg"
        className="absolute top-[580px] right-[10vw] opacity-50 rotate-25"
      />
      {/*    <div */}
      {/*      className="absolute inset-0 -z-1" */}
      {/*      style={{ */}
      {/*        backgroundColor: "#3654EA", */}
      {/*        backgroundImage: ` */}
      {/*   linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), */}
      {/*   linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px), */}
      {/*   radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%) */}
      {/* `, */}
      {/*        backgroundSize: "40px 40px, 40px 40px, 100% 100%", */}
      {/*      }} */}
      {/*    /> */}

      <Nav />
      <Header />
      <Why />
      <Dashboard />
      <Developers />
      <Toaster />

      {/* <DisplayModel /> */}
      <EmailForm />
    </div>
  );
}

export default App;
