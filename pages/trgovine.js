import Head from "next/head";
import Navigation from "../components/head-navigation";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-screen">
      <Head>
        <title>Trgovine - Fehta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/* Content */}
      <main className="mx-auto max-w-screen-xl">
        <section className="pb-0">
          <div className="container flex flex-col items-center px-5 py-8 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="mx-auto mb-12 font-semibold leading-none text-black lg:w-1/2 text-5xl md:text-6xl title-font font-machina">
                Trgovine
              </h1>
              <p className="mx-auto text-lg font-medium leading-relaxed  lg:w-1/2">
                Najdi Fehto v eni od BIO trgovin v tvoji okolici.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full h-96 rounded-none md:rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/d/u/0/embed?mid=10u3lv8cRnrSQuvRUAfcqsR5VBYgyGJZ2"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/ajda-maribor.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Ekološka trgovina Ajda
                    </h2>
                    <a href="https://goo.gl/maps/EnruoXm7ijF2Uhhn9">
                      <h3 className="text-gray-500 mb-3">
                        Glavni trg 23, 2000 Maribor
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/EnruoXm7ijF2Uhhn9">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/biotopic-maribor.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Biotopic Maribor
                    </h2>
                    <a href="https://goo.gl/maps/3LVpishi8uW2RtWF6">
                      <h3 className="text-gray-500 mb-3">
                        Pobreška cesta 18, 2000 Maribor
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/3LVpishi8uW2RtWF6">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/biotopic-celje.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Biotopic Celje
                    </h2>
                    <a href="https://goo.gl/maps/DVxUsreCcbEMWEcR7">
                      <h3 className="text-gray-500 mb-3">
                        Mariborska cesta 100, 3000 Celje
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/DVxUsreCcbEMWEcR7">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/biotopic-ljubljana.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Biotopic Ljubljana
                    </h2>
                    <a href="https://goo.gl/maps/q7Wi8M5ijXVwQpjX6">
                      <h3 className="text-gray-500 mb-3">
                        Megamarket Interspar, Jamova cesta 105, 1000 Ljubljana
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/q7Wi8M5ijXVwQpjX6">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/vegansko.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Vegansko.si
                    </h2>
                    <a href="https://g.page/Vegansko?share">
                      <h3 className="text-gray-500 mb-3">
                        Trg mladinskih delovnih brigad 10, 1000 Ljubljana
                      </h3>
                    </a>
                    <a href="https://g.page/Vegansko?share">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/gust.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Trgovina Gušt
                    </h2>
                    <a href="https://g.page/TrgovinaGust?share">
                      <h3 className="text-gray-500 mb-3">
                        Ljubljanska cesta 73, 1230 Domžale
                      </h3>
                    </a>
                    <a href="https://g.page/TrgovinaGust?share">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/zlata-pticka.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Zlata ptička
                    </h2>
                    <a href="https://goo.gl/maps/qCb8CFNCx9scG3sx8">
                      <h3 className="text-gray-500 mb-3">
                        Šutna 2, 1241 Kamnik
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/qCb8CFNCx9scG3sx8">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/dobra-misel.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Dobra Misel
                    </h2>
                    <a href="https://g.page/Dobramisel?share">
                      <h3 className="text-gray-500 mb-3">
                        Železniška ulica 5, 4248 Lesce
                      </h3>
                    </a>
                    <a href="https://g.page/Dobramisel?share">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/zrno-do-zrna.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Zrno do Zrna
                    </h2>
                    <a href="https://goo.gl/maps/RPDbF25i5Kkmx8sY6">
                      <h3 className="text-gray-500 mb-3">
                        Trubarjeva cesta 8, 1000 Ljubljana
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/RPDbF25i5Kkmx8sY6">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
              {/* Store */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/images/bajka.jpg"
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Bajka
                    </h2>
                    <a href="https://goo.gl/maps/LGLZzfFjiEUqSNrq8">
                      <h3 className="text-gray-500 mb-3">
                        Panonska ulica 8, 9250 Gornja Radgona
                      </h3>
                    </a>
                    <a href="https://goo.gl/maps/LGLZzfFjiEUqSNrq8">
                      <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                        Poglej na Google Maps
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
