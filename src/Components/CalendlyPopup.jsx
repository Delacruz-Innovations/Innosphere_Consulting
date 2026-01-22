import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyPopup = ({ text = "Book a 30minsFree Consultation", className = "" }) => {
    return (
        <PopupButton
            url="https://calendly.com/free-consultation-innosphereconsulting/30min"
            rootElement={document.getElementById("root")}
            text={text}
            className={className}
        />
    );
};

export default CalendlyPopup;
