import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto py-6">
          <NavBar></NavBar>
        </section>
      </header>
      <nav></nav>
      <main></main>
      <footer></footer>
      <h2>Home And Fortress</h2>
    </div>
  );
};

export default HomeLayout;
