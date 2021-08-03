import Head from "next/head";
import Navigation from "../components/head-navigation";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Fehta - Hrana za vse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="mx-auto max-w-screen-xl">
        {/* Hero */}
        <section className="pb-0 md:pb-28">
          <div className="container flex flex-col items-center px-5 py-8 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                Tukaj živi Fehtin
              </h2>
              <h1 className="mx-auto mb-12 font-semibold leading-none text-black lg:w-1/2 text-5xl md:text-6xl title-font font-machina">
                O Fehti
              </h1>
              <p className="mx-auto text-lg font-medium leading-relaxed  lg:w-1/2">
                Tukaj je morda kaj vec teksta gled Fehte in tega vsega. Tukaj je
                morda kaj vec teksta gled Fehte in tega vsega. Tukaj je morda
                kaj vec teksta gled Fehte in tega vsega.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
