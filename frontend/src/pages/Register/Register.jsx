import React, { useState } from "react";
import styles from "./Register.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOTP from "../Steps/StepOTP/StepOTP";
import stepName from "../Steps/stepName/stepName";
import stepAvatar from "../Steps/stepAvatar/stepAvatar";
import stepUserName from "../Steps/stepUserName/stepUserName";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: stepName,
  4: stepAvatar,
  5: stepUserName,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    setStep((currStep) => currStep + 1);
  };

  return <Step onNext={onNext} />;
};

export default Register;
