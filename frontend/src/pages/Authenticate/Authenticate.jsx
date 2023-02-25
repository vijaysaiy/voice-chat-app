import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOTP from "../Steps/StepOTP/StepOTP";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};
const Autheticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    setStep((currStep) => currStep + 1);
  };

  return <Step onNext={onNext} />;
};

export default Autheticate;
