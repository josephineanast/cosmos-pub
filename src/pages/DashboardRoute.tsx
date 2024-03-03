import { Overview } from "./overview";
import { Route, Routes } from "react-router-dom";
import { Proposal } from "./proposal";
import { Validator } from "./validator";

export const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/proposal" element={<Proposal />} />
      <Route path="/validator" element={<Validator />} />
    </Routes>
  );
};
