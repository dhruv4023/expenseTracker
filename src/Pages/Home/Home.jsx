import WidgetsOnPage from "components/WidgetsOnPage";
import React from "react";
import UserProfile from "../Widget/UserProfile";

const Home = () => {
  const userData = {
    name: "abc",
    email: "abc@example.com",
    joinedOn: "12-12-1212",
  };
  return (
    <WidgetsOnPage
      title={"Dash Board"}
      leftComponent={<UserProfile userData={userData} />}
      rightComponent={<></>}
    />
  );
};

export default Home;
