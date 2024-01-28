"use client";

import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { Content } from "@/components/home/content";
import HomeTeamManeger from "@/components/home/teammanager";
import HomeAgency from "@/components/home/agency";

const Home: NextPage = () => {
    
  const router = useRouter();
  const isAuth: Boolean = true; // Change this to your actual authentication check
  const whosAuth: String = "agency";


  return (
    <>
      {whosAuth === "teammanager" && isAuth ? (
        <HomeTeamManeger />
      ) : whosAuth === "agency" && isAuth ? (
        <HomeAgency />
      ) : (
        <Content />
      )}
    </>
  );
};

export default Home;
