import React from "react";
import Head from "next/head";
import { AnishFunc, UserDetails } from "../Forms/formHooks";

interface Iprops {
  title: string;
}

export const TitleComponent: React.FC<Iprops> = (props) => {
  const { title } = props;
  return (
    <Head>
      <title> Storage Application | {title}</title>
      <meta name="keywords" content="retail, storage" />
    </Head>
  );
};

// <AnishFunc name={"Mohit"} />
// <UserDetails name={"sujan"} age={2} gender={"male"} />
