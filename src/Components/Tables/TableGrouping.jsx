import React from "react";
import { useLocation } from "react-router-dom";
import Tasks from "./Tasks";
import UpcomingAppointments from "./UpcomingAppointments";
import SalesOrder from "./SalesOrder";
import LabResults from "./LabResults";
import Medications from "./Medications";
import Contacts from "./Contacts";
import AwaitingPayment from "./AwaitingPayment";
import Communications from "./Communications";

const ClientTableGrouping = () => {
  const location = useLocation();

  return (
    <>
      <div className="md:grid md:gap-4 lg:grid-cols-2">
        <Tasks title={location.pathname==="/"?"Tasks":"Today's Task"}/>
        <UpcomingAppointments title={location.pathname==="/"?"Upcoming Appointments":"Today's Appointment"} />
      </div>
      <Contacts value={location.pathname === "/" ? "hidden" : ""} />
      <SalesOrder title={location.pathname==="/"?"Sales Order":"Process Sales Order"} /> 
      <LabResults value={location.pathname === "/" ? "" : "hidden"} />
      <Medications value={location.pathname === "/" ? "" : "hidden"} />
      <AwaitingPayment  value={location.pathname === "/" ? "hidden" : ""}/>
      <Communications value={location.pathname === "/" ? "hidden" : ""}s/>
    </>
  );
};

export default ClientTableGrouping;
