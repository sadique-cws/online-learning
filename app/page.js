import Image from "next/image";
import Course from "./components/Course";
import Banner from "./components/Banner";

export default async function Home() {
  let courses = await fetch("http://127.0.0.1:3000/api/course",{next:{revalidate:5}});
      courses = await courses.json();

  return (
    <>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Course courses={courses}/>
      </div>
    </>
  );
}
