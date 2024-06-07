import { FaBuildingColumns } from "react-icons/fa6";
interface props {
  name: string;
  icons: any;
}
export default function ServiceButton(props: props) {
  return (
    <>
      <div className="">
      <div className="group iphonese:h-20 iphonese:w-20 h-28 w-28 flex justify-center items-center shadow-md rounded-full bg-white lg:hover:bg-green-700">
  {/* <FaBuildingColumns className="text-6xl text-blue-700" /> */}
  <p className="text-6xl text-green-700 iphonese:text-4xl group-hover:text-white">
    {props.icons}
  </p>
</div>

        <div className=" flex justify-center iphonese:mt-5 lg:mt-10">
          <p className="  iphonese:font-semibold iphonese:text-sm lg:text-xl font-semibold">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
