import Service from "./service";

export default function Jumbotron() {
  return (
    <>
      <div className=" relative ">
        <div className=" absolute h-screen jumbotron w-full">2</div>
        <div className=" absolute h-screen bg-black top-0 opacity-60 w-full"></div>
        <div className=" absolute h-96 left-44 top-0 w-96">
          <p className=" p-5 text-white text-6xl">4dfrr</p>
        </div>
        <div className=" absolute h-96 left-44 top-0 w-96">
          <p className=" p-5 text-white text-6xl">4dfrr</p>
        </div>
        <div className=" absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2   top-[46rem]  shadow-md">
            {/* <Service /> */}
          </div>'
       
      </div>
    </>
  );
}
