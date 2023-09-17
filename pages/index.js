import Head from "next/head";
import Footer from "../components/Footer";

import MealSelectionView from "./mealSelectionView";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Meal roulette</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <MealSelectionView />
      </main>
      <Footer />
    </div>
  );
}
