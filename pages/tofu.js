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
                Tofu
              </h1>
              <p className="mx-auto text-lg font-medium leading-relaxed  lg:w-1/2">
                Tukaj je morda kaj vec teksta gled Fehte in tega vsega. Tukaj je
                morda kaj vec teksta gled Fehte in tega vsega. Tukaj je morda
                kaj vec teksta gled Fehte in tega vsega.
              </p>
            </div>
          </div>
        </section>

        {/* Tofu - normal */}
        <section className=" sm:block hidden">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
            <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
              <h1 className="mb-2 font-black text-black text-5xl title-font font-machina">
                Tofu
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-left">
                Je eden najpomembnejših virov beljakovin rastlinskega izvora,
                ker vsebuje vse bistvene aminokisline, ki so potrebne za
                normalno delovanje človeškega telesa.
              </p>
              <p className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>
                Velik delež beljakovin
              </p>
              <p className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>
                Zelo enostavno prebavljiv
              </p>
              <p className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </span>
                Dovzeten za vpoj drugih okusov v obliki marinad in začimb
              </p>
              <a className="mt-3 text-red-600 inline-flex items-center">
                Naš tofu
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded-lg"
                alt="hero"
                src="/images/tofu-package.jpg"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
