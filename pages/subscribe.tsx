import React from "react";
import EmailAddressForm from "../components/Forms/CallToActionForm";
import { TitleComponent } from "../components/Home/TitleComponent";

const subscribe = () => {
  const SubscribeTitleText = "Subscribe";

  return (
    <>
      <TitleComponent title={SubscribeTitleText} />
      <EmailAddressForm />
    </>
  );
};

export default subscribe;
