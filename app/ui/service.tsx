import { FaHome, FaCog } from "react-icons/fa";
import { FaBuildingColumns, FaBusSimple, FaUser } from "react-icons/fa6";
import ServiceButton from "./servicebtn";

export default function Service(){
    const services = [
        {
          name: 'Commune',
          icon: <FaBuildingColumns />
        },
        {
          name: 'Home',
          icon: <FaHome />
        },
        {
          name: 'Transport',
          icon: <FaBusSimple  />
        },
        {
          name: 'Settings',
          icon: <FaCog  />
        }
      ];
    const buttons = Array(4).fill(null); // Creates an array with 4 null elements

    return (
    <>
{/* <div className="relative bg-red-900">
  <div className="absolute w-full h-48 top-14 bg-white"></div>
  <div className="absolute top-16 flex space-x-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  {services.map((service, index) => (
          <ServiceButton key={index} name={service.name} icons={service.icon} />
        ))}
  </div> 
</div> */}

<div className=" relative bg-[#F3F6F7]  h-screen">
<div className="lg:absolute iphonese:w-full iphonese:h-screen lg:w-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:h-40 lg:top-10 bg-white"></div>
  <div className="lg:absolute iphonese:flex-col  iphonese:space-x-0 iphonese:top-0 top-0 lg:flex lg:flex-row lg:space-x-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
  {services.map((service, index) => (
          <ServiceButton key={index} name={service.name} icons={service.icon} />
        ))}
  </div>
</div>

    </>
    )
}