import React from "react";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import phoneLogo from "../../../../assets/phone.png";
import arrowForward from "../../../../assets/arrow.png";
const Phone = () => {
  return (
    <Card title={"Enter your phone number"} icon={phoneLogo}>
      <div>
        <Button text="Next" icon={arrowForward} />
      </div>
    </Card>
  );
};

export default Phone;
