import React, {useState, useEffect} from "react";
import Home from "./Home";
import PhysicianContainer from "./PhysicianContainer";
import PatientContainer from "./PatientContainer";


function App() {

  const [physiciansData, setPhysiciansData] = useState([])
  const [patientsData, setPatientsData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/physicians")
    .then(res => res.json())
    .then(data => {
      setPhysiciansData(data)
    })

    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPatientsData(data)
    })

  },[])
  return (
    <div>
      <Home/>
      <PhysicianContainer physiciansData={physiciansData}/>
      <PatientContainer patientsData={patientsData}/>
    </div>
  );
}

export default App;
