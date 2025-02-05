import React, { useState } from "react";
import { Step, Stepper, StepLabel, StepContent, Button } from "@mui/material";

const VerticalStepper = ({ status }) => {
 const [activeStep, setActiveStep] = useState(status);

 const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
 };

 const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 return (
  <Stepper activeStep={activeStep} orientation="vertical">
   {steps.map((label, index) => (
    <Step key={label}>
     <StepLabel>{label}</StepLabel>
    </Step>
   ))}
  </Stepper>
 );
};

const steps = ["Ordered", "Supplied", "Delivered"];

const getStepContent = (step) => {
 switch (step) {
  case 0:
   return "Step 1 Content";
  case 1:
   return "Step 2 Content";
  case 2:
   return "Step 3 Content";
  default:
   return "Unknown step";
 }
};

export default VerticalStepper;
