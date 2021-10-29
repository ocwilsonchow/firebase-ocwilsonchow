import React, { useState, useEffect } from "react";
import HeaderNavIcons from "./HeaderNavIcons";
import AboutMe from "./AboutMe";
import Bio from "./Bio";
import Stacks from "./Stacks";
import Footer from "./Footer";
import Interests from "./Interests";
import DevPricing from "./DevPricing";
import WeatherApi from "./WeatherApi";
import StockSearch from "./StockSearch";
import MedicineList from "./MedicineList";
import { v4 as uuidv4 } from "uuid";
import MedicineEdit from "./MedicineEdit";
import Header from "./Header";

export const MedicineContext = React.createContext();
const LOCAL_STORAGE_KEY = "ocwilsonchow.medicines";

export default function Home() {
  const medicineContextValue = {
    handleMedicineAdd: handleMedicineAdd,
    handleMedicineDelete: handleMedicineDelete,
    handleMedicineSelect: handleMedicineSelect,
    handleMedicineChange: handleMedicineChange,
  };

  const [selectedMedicineId, setSelectedMedicineId] = useState();
  const [medicines, setMedicines] = useState(medicineData);
  const selectedMedicine = medicines.find(
    (medicine) => medicine.id === selectedMedicineId
  );

  function handleMedicineSelect(id) {
    setSelectedMedicineId(id);
  }

  function handleMedicineAdd() {
    const newMedicine = {
      id: uuidv4(),
      name: "New Medication",
      indication: "Untitled",
      drug_class: "",
      mechanism: "",
      direction: "",
      side_effects: "",
      notes: "",
    };

    setSelectedMedicineId(newMedicine.id);
    setMedicines([...medicines, newMedicine]);
  }

  function handleMedicineChange(id, medicine) {
    const newMedicines = [...medicines];
    const index = newMedicines.findIndex((m) => m.id === id);
    newMedicines[index] = medicine;
    setMedicines(newMedicines);
  }

  function handleMedicineDelete(id) {
    setMedicines(medicines.filter((medicine) => medicine.id !== id));
  }

  useEffect(() => {
    const medicineJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (medicineJSON != null) setMedicines(JSON.parse(medicineJSON));
  }, []);

  useEffect(() => {
    console.log("Rendered");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(medicines));
  }, [medicines]);

  return (
    <>
      <div className="page">
        <Header />
        <div className="body">
          <HeaderNavIcons />
          <AboutMe />
          <Bio />
          <Stacks />
          <Interests />
          <WeatherApi />
          <StockSearch />
          <MedicineContext.Provider value={medicineContextValue}>
            <MedicineList medicines={medicines} />
            {selectedMedicine && <MedicineEdit medicine={selectedMedicine} />}
          </MedicineContext.Provider>
          <DevPricing />
        </div>

        <Footer />
      </div>
    </>
  );
}

const medicineData = [
  {
    id: 1,
    name: "Amlodipine",
    drug_class: "Calcium-channel blocker",
    indication: "Hypertension",
    mechanism: "dilate blood vessels to lower blood pressure",
    direction: "Take ONE tablet ONCE in the morning",
    side_effects: "dizziness, oedema",
    notes: "if you develop swollen legs, speak to your pharmacist or doctor",
  },
  {
    id: 2,
    name: "Indapamide",
    drug_class: "Thiazide-like diuretic",
    indication: "Hypertension",
    mechanism: "dilate blood vessels to lower blood pressure",
    direction: "Take ONE tablet ONCE in the morning",
    side_effects: "dizziness",
    notes: "if you develop swollen legs, speak to your pharmacist or doctor",
  },
  {
    id: 3,
    name: "Atorvastatin",
    drug_class: "Statin",
    indication: "Hypercholesterolaemia",
    mechanism: "lower the production of cholesterol in the body",
    direction: "Take ONE tablet ONCE a day",
    side_effects: "generally well tolerated",
    notes:
      "if you develop unexplained muscle pain, speak to your pharmacist or doctor immediately",
  },
];
