import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftNavbar from "../components/Layout_component/LeftNavbar";
import RightNavbar from "../components/Layout_component/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-6">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
      <footer></footer>
      <h2>Home And Fortress</h2>
    </div>
  );
};

export default HomeLayout;
