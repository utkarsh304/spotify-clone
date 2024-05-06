// import Head from 'next/head';
import { getSession } from "next-auth/react";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

function HomePage(props) {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar/>
        <Center />
      </main>
      <div className="sticky bottom-0" >
        <Player />
      </div>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
}

// export async function getStaticProps(context) {
//   const session = await getSession(context);
  
//   return {
//     props: {
//       session
//     }
//   };
// }