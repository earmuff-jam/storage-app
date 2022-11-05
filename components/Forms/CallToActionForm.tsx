import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../util/firebaseConfig";

export const useEmailForm = (): [
  string,
  string,
  (emailValue: string) => void,
  string,
  (e: React.MouseEvent) => void,
  boolean
] => {
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailLabel, setEmailLabel] = useState<string>("Email Address");

  const handleEmail = (emailValue: string) => {
    setError(false);
    setData(emailValue);
    setEmailLabel(emailLabel);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailReg.test(data)) {
      setEmail(data);
      setData("");
      return;
    }
    setError(true);
    setEmail("");
  };

  return [email, data, handleEmail, emailLabel, handleSubmit, error];
};

const EmailForm: React.FC = () => {
  const router = useRouter();
  const [email, data, handleEmail, emailLabel, handleSubmit, error] =
    useEmailForm();

  const sendEmailToDb = (email: string) => {
    const collectionReference = collection(db, "emails");
    addDoc(collectionReference, {
      emailAddress: email,
      unsubscribe: false,
    });
    // getDocs(collectionReference) // retrieve all the docs
    //   .then((snapshot) => {
    //     let emails = [];
    //     snapshot.docs.forEach((doc) => {
    //       emails.push({ ...doc.data(), id: doc.id });
    //     });
    //     console.log(emails);
    //   })
    //   .catch(() => {
    //     console.error(" Failed .");
    //   });
  };

  useEffect(() => {
    email != "" && sendEmailToDb(email);
  }, [email]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h4"> Stay in the loop </Typography>
      <Typography variant="body1">Tune in for roll out date</Typography>
      <Box component="form" minWidth={'50vh'}>
        <FormControl fullWidth error={error} variant="standard">
          <InputLabel htmlFor="component-helper">{emailLabel}</InputLabel>
          <Input
            id="component-helper"
            value={data}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
              }
              // ev.target.value -> results an error atm
              // although i could ev.target.value in dev console
              // this prevents onKeyDown to submit. accessibility issue ?
            }}
            onChange={(e) => {
              if (e.target.value != " ") {
                handleEmail(e.target.value);
              }
            }}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Participation is 100 % free and voluntary.
          </FormHelperText>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={(e) => handleSubmit(e)}>
        {" "}
        Submit{" "}
      </Button>
      <Button variant="text" onClick={() => router.push("/")}>
        {" "}
        Cancel{" "}
      </Button>
    </Box>
  );
};
export default EmailForm;
