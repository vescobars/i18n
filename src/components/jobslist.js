import React, { useState } from "react";
import { useIntl } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
    },
  ]);

  //mod style based on language
  const style_es = useIntl().locale.includes("es") ? "table-light"  : "table-dark";

  return (
    <div>
      <table className="table">
        <thead className={style_es}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position</th>
            <th scope="col">Company</th>
            <th scope="col">Salary</th>
            <th scope="col">City</th>
            <th scope="col">Publication date</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
