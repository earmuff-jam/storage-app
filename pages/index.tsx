import { TitleComponent } from "../components/Home/TitleComponent";
import Welcome from "../components/Welcome";

const Home = () => {
  const CompanyStatement = "Are you ready to truly save your money?";

  return (
    <>
      <TitleComponent title={"Home"} />
      <Welcome companyStatement={CompanyStatement} />
    </>
  );
};
export default Home;
