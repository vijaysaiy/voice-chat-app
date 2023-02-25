import React from "react";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import email from "../../../../assets/email.png";
import arrowForward from "../../../../assets/arrow.png";

const Email = () => {
  return (
    <Card title={"Enter your email id"} icon={email}>
      <div>
        <Button text="Next" icon={arrowForward} />
      </div>
    </Card>
  );
};

export default Email;
