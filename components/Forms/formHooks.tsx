import React, { useState } from "react";

export const getFormEmailAddress = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const handleEmailAddress = (value: string) => setEmailAddress(value);
  return [emailAddress, handleEmailAddress];
};

export interface Iprops {
  name: string;
}

export const AnishFunc: React.FC<Iprops> = (props) => {
  const { name } = props;
  return (
    <>
      <p> {name}</p>
    </>
  );
};

// export pani garna milcha
interface NewerProps extends Iprops {
  age: number;
  gender: string;
}

export const UserDetails: React.FC<NewerProps> = (props) => {
  const { name, age, gender } = props;
  return (
    <>
      <p> {name}</p>
      <p> {age}</p>
      <p> {gender}</p>
    </>
  );
};

// people store Interface as types folder.

// state management in typescript

export interface User {
  id: string;
  name: string;
  pets: string[];
  friends: number;
  emailAddress: string;
}

export const UserInt: React.FC<NewerProps> = (props) => {
  const { name, age, gender } = props;
  const [user, setUser] = useState<User | unknown>(null);

  const [animal, setAnimal] = useState<Partial<User>>({});

  const userPets: Partial<User> = {
    id: "1",
    friends: 27,
    pets: ["cat", "dog"],
  };

  setAnimal(userPets);
  console.log(animal); // displays above data

  return (
    <>
      <p> {name}</p>
      <p> {age}</p>
      <p> {gender}</p>
    </>
  );
};
