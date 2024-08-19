import Image from "next/image";
import JoinUs from "./(components)/JoinUs/JoinUs";
import Sections from "./(components)/Sections/Sections";
import FamCourses from "./(components)/FamCourses/FamCourses";
import LatCourses from "./(components)/LatCourses/LatCourses";
import Footer from "./(components)/Footer/Footer";

export default function Home() {
  return (
      <div className="">
        <JoinUs />
        <Sections/>
        <FamCourses />
        <LatCourses />
          <button className="my-8 rounded-3xl py-3 px-4 w-[200px] border-bluePrime bg-bluePrime text-white flex justify-center items-center font-bold text-3xl mx-auto">
            عرض المزيد
          </button>
      </div>
  );
}
