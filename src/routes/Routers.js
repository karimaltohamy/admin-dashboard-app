import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import Bar from "../pages/bar/Bar";
import Calendar from "../pages/calendar/calendar";
import Contacts from "../pages/contacts/Contacts";
import Faq from "../pages/faq/Faq";
import Form from "../pages/form/Form";
import Geography from "../pages/geography/Geography";
import Invoices from "../pages/invoices/Invoices";
import Line from "../pages/line/Line";
import Pie from "../pages/pie/Pie";
import Team from "../pages/team/Team";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/barchart" element={<Bar />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/form" element={<Form />} />
      <Route path="/geographychart" element={<Geography />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/linechart" element={<Line />} />
      <Route path="/piechart" element={<Pie />} />
    </Routes>
  );
};

export default Routers;
