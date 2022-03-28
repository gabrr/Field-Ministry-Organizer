import { AppointmentContext } from "contexts";
import { useContext } from "react";

export const useAppointments = () => useContext(AppointmentContext)