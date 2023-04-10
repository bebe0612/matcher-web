import { useState } from "react";
import NavBar from "../components/navbar";
import PageHead from "../components/pagehead";

export default function Main() {
  const [schoolInfo, setSchoolInfo] = useState({ name: "광운중학교", year: 2020 });

  return (
    <div className="bg-gradient-to-r from-orange-200 to-yellow-200 h-screen">
      <PageHead title={schoolInfo.name} />
      <NavBar school={schoolInfo.name} year={schoolInfo.year} />
    </div>
  );
}