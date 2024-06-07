import Image from "next/image";
import Jumbotron from "./ui/jumbotron";
import NavBar from "./ui/navbar";
import Service from "./ui/service";

export default function Home() {
  return (
   <>
    <NavBar/>
  <Jumbotron/>
<div className=" lg:mt-[52rem] iphonese:mt-[40rem] iphonese:bg-black ">
<Service />
</div>
   </>
  );
}
