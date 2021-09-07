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
          <div className="max-w-3xl mx-auto md:pb-16 pb-8 md:px-0 px-4">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="./images/header-image.png"
            />
          </div>
          <div className="container flex flex-col items-center px-5 py-8 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
              <h1 className="mx-auto mb-12 font-semibold leading-none text-black lg:w-1/2 text-5xl md:text-6xl title-font font-machina">
                Dobra hrana za dobre ljudi. Poišči nas, kjer bi iskal
                prijatelje.
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
              <div>
                <p className="inline-block text-blue-500 border border-blue-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  klasik
                </p>
                <p className="inline-block text-red-500 border border-red-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  Dimljen
                </p>
                <p className="inline-block text-green-500 border border-green-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  Dimljen z baziliko
                </p>
              </div>

              {/* TODO: ADD LINK WHEN PAGE IS FINISHED */}
              {/* <a
                href="/tofu"
                className="mt-3 text-red-600 inline-flex items-center"
              >
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
              </a> */}
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded-lg"
                alt="hero"
                src="/images/tofu-ribbon.png"
              />
            </div>
          </div>
        </section>

        {/* Tofu - mobile */}
        <section className="block sm:hidden">
          <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/images/tofu-ribbon.png"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <h1 className="mb-2 font-black text-black text-5xl title-font font-machina">
                Tofu
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-left ">
                Je eden najpomembnejših virov beljakovin rastlinskega izvora,
                ker vsebuje vse bistvene aminokisline, ki so potrebne za
                normalno delovanje človeškega telesa.
              </p>
              <p className="flex mb-2 ">
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
              <p className="flex mb-2">
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
              <p className="flex mb-4">
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
              {/* TODO: ADD LINK WHEN PAGE IS FINISHED */}
              {/* <a
                href="/tofu"
                className="mt-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out inline-flex items-center"
              >
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
              </a> */}
              <div>
                <p className="inline-block text-blue-500 border border-blue-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  klasik
                </p>
                <p className="inline-block text-red-500 border border-red-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  Dimljen
                </p>
                <p className="inline-block text-green-500 border border-green-500 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  Dimljen z baziliko
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tempeh */}
        <section className="pb-0 md:pb-14 md:pt-20">
          <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
            <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                loading="lazy"
                src="/images/tempeh-ribbon.png"
              />
            </div>
            <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
              <h1 className="mb-2 font-black text-black text-5xl title-font font-machina">
                Tempeh
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-left ">
                Tempeh je izdelan iz kuhane soje, ki je v procesu fermentacije
                povezana z belkasto, bombažno plemenito plesenijo.
              </p>
              <p className="flex mb-2">
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
                Bogat z naravnimi vlakni
              </p>
              <p className="flex mb-2">
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
                Spodbuja prebavo
              </p>
              <p className="flex mb-4">
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
                Vebuje vseh osem esencialnih aminokislin
              </p>
              {/* TODO: ADD LINK WHEN PAGE IS FINISHED */}
              {/* <a
                href="/tempeh"
                className="mt-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out inline-flex items-center"
              >
                Naš tempeh
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
              </a> */}
              <div>
                <p className="inline-block text-indigo-600 border border-indigo-600 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  klasik
                </p>
                <p className="inline-block text-yellow-600 border border-yellow-600 py-1 px-3 rounded-full font-normal text-xs tracking-wide uppercase mr-1">
                  Dimljen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="text-gray-600 body-font pb-0 md:pb-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-14">
              <h1 className="md:text-5xl text-4xl font-bold title-font text-gray-900 font-machina mb-4">
                Kot bi narava hotela
              </h1>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
                <div className="w-40 h-40 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M144.396 116.926C142.634 116.926 139.938 116.437 138.859 115.76C137.548 114.938 135.916 113.914 132.878 113.914C129.841 113.914 127.25 114.938 125.941 115.76C124.862 116.437 124.085 116.926 122.325 116.926C120.566 116.926 119.789 116.437 118.714 115.762C117.404 114.94 115.774 113.914 112.739 113.914C109.702 113.914 108.071 114.938 106.762 115.762C105.683 116.438 104.906 116.926 103.148 116.926C101.389 116.926 100.613 116.438 99.5365 115.762C98.2253 114.94 96.595 113.914 93.5596 113.914C90.5242 113.914 88.8939 114.938 87.5828 115.762C86.8788 116.205 86.3 116.562 85.4946 116.76C86.4716 106.972 88.7269 95.561 93.8997 83.0414C97.308 85.1646 101.283 86.2699 105.475 86.2699C106.874 86.2699 108.301 86.1465 109.734 85.898C118.322 84.4087 126.485 78.5299 132.724 69.3457C148.864 45.5879 142.565 16.9557 142.289 15.7495C142.038 14.6518 141.018 13.9184 139.917 14.0073C138.7 14.1112 109.775 16.8518 92.3365 39.6564C85.5945 48.4716 82.5621 58.1211 83.7942 66.8279C84.54 72.0848 86.8117 76.6867 90.2498 80.111C86.9698 88.3329 84.27 97.6692 82.5039 108.252C80.8602 102.066 78.4125 96.1709 75.4636 90.5947C77.8367 87.7607 79.4133 84.2009 79.9787 80.2089C81.0526 72.6285 78.4184 64.2379 72.5639 56.5821C57.469 36.845 32.4415 34.4718 31.384 34.3799C30.2891 34.2865 29.2629 35.0274 29.0123 36.1222C28.7737 37.1672 23.3234 61.9429 37.2907 82.5053C42.7097 90.4818 49.8111 95.5896 57.284 96.8862C58.5385 97.1045 59.7825 97.2114 61.0056 97.2114C65.0508 97.2114 68.8663 96.0293 72.0419 93.7721C75.4934 100.497 78.153 107.662 79.4357 115.202C78.2633 114.538 76.7553 113.914 74.3882 113.914C71.3528 113.914 69.7224 114.938 68.4128 115.762C67.3374 116.438 66.5603 116.926 64.8032 116.926C63.0476 116.926 62.2719 116.438 61.1965 115.762C59.8884 114.94 58.258 113.914 55.2241 113.914C52.1887 113.914 50.5584 114.938 49.2473 115.762C48.1704 116.438 47.3948 116.926 45.6362 116.926C43.8791 116.926 43.1019 116.438 42.0265 115.762C40.7169 114.94 38.1277 113.914 35.0908 113.914C32.0554 113.914 30.4251 114.938 29.1154 115.762C28.04 116.438 25.3451 116.926 23.5865 116.926C21.8279 116.926 21.0523 116.438 19.9753 115.762C18.6657 114.938 17.0354 113.914 14 113.914V118.432C15.7586 118.432 16.5357 118.92 17.6112 119.596C18.9223 120.418 20.5526 121.444 23.588 121.444C26.6249 121.444 30.173 120.42 31.4826 119.596C32.558 118.92 33.3352 118.432 35.0923 118.432C36.8509 118.432 38.5869 118.921 39.6623 119.596C40.9719 120.418 42.6023 121.444 45.6377 121.444C48.673 121.444 50.3034 120.42 51.6145 119.596C52.6899 118.92 53.467 118.432 55.2256 118.432C56.9812 118.432 57.7569 118.92 58.8323 119.596C60.1404 120.418 61.7708 121.444 64.8047 121.444C67.8401 121.444 69.4704 120.42 70.78 119.596C71.8554 118.92 72.6325 118.432 74.3896 118.432C76.1482 118.432 76.9254 118.92 78.0008 119.596C78.6004 119.972 79.2761 120.388 80.1144 120.731C80.2278 122.236 80.2964 123.751 80.2904 125.282C73.0189 129.226 70.8501 132.765 69.7911 137.112C68.4188 142.747 61.3263 144.975 61.2606 144.997L62.5344 149.327C62.9267 149.21 72.1463 146.359 74.1361 138.19C74.7372 135.717 75.6933 133.382 80.356 130.458C80.2979 132.347 80.2665 134.269 80.2665 136.225C80.2665 137.112 80.7811 137.918 81.5821 138.283C85.4334 140.041 86.831 142.662 88.3092 145.436C90.1349 148.858 92.2008 152.735 98.6594 154L99.5096 149.565C95.1348 148.71 93.9251 146.439 92.2485 143.296C90.7897 140.559 89.0043 137.211 84.7413 134.832C84.7458 130.909 84.7816 126.399 85.1112 121.391C87.4351 121.174 88.8149 120.311 89.9515 119.597C91.0269 118.921 91.804 118.433 93.5626 118.433C95.3212 118.433 96.0968 118.921 97.1738 119.597C98.4849 120.42 100.115 121.445 103.151 121.445C106.187 121.445 107.818 120.421 109.127 119.597C110.206 118.921 110.983 118.433 112.742 118.433C114.499 118.433 115.276 118.921 116.351 119.597C117.661 120.42 119.291 121.445 122.328 121.445C125.365 121.445 126.997 120.421 128.306 119.599C129.385 118.923 131.121 118.433 132.881 118.433C134.642 118.433 135.421 118.923 136.499 119.599C137.811 120.421 141.36 121.445 144.399 121.445C147.438 121.445 149.07 120.421 150.381 119.599C151.46 118.923 152.238 118.433 154 118.433V113.916C150.962 113.916 149.33 114.94 148.019 115.762C146.939 116.437 146.159 116.926 144.396 116.926ZM88.2242 66.1894C87.1637 58.7009 89.8814 50.2576 95.8791 42.4166C109.557 24.5316 131.579 19.8229 138.297 18.7733C139.371 25.5496 141.696 48.1539 129.037 66.7888C123.488 74.958 116.365 80.1622 108.98 81.4437C104.113 82.2885 99.4365 81.3503 95.7269 78.831C102.08 64.9592 112.106 49.848 127.933 34.1706L124.798 30.9451C115.684 39.9741 101.981 53.5689 92.1829 75.5573C90.117 72.9974 88.7343 69.7929 88.2242 66.1894ZM69.6494 89.9563C66.4618 92.2978 62.3346 93.1773 58.0433 92.4334C51.7696 91.3446 45.7093 86.9114 40.9824 79.9499C30.3309 64.271 32.082 45.2913 33.0158 39.1534C39.0866 40.1322 57.4854 44.2568 69.0229 59.3408C74.1331 66.0238 76.4495 73.2067 75.5501 79.5689C75.1936 82.0822 74.333 84.3605 73.0681 86.2985C65.1522 72.8679 54.6797 61.446 46.4327 52.4561C45.2096 51.1234 44.0327 49.8404 42.9185 48.6087L39.6146 51.6565C40.7363 52.8943 41.9191 54.1848 43.1482 55.525C51.4623 64.5902 62.1123 76.2063 69.8746 89.771C69.7985 89.8298 69.7284 89.899 69.6494 89.9563Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-3xl title-font font-bold font-machina mb-3">
                    100% naravno in <br />
                    ekološko
                  </h2>
                  <p className="leading-relaxed text-base">
                    Preverjeno ter z EKO certifikatom.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
                <div className="w-40 h-40 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84 154C122.66 154 154 122.66 154 84C154 45.3401 122.66 14 84 14C45.3401 14 14 45.3401 14 84C14 122.66 45.3401 154 84 154ZM84 149C119.899 149 149 119.899 149 84C149 48.1015 119.899 19 84 19C48.1015 19 19 48.1015 19 84C19 119.899 48.1015 149 84 149ZM59 69C50.7157 69 44 75.7157 44 84C44 85.3807 45.1193 86.5 46.5 86.5C47.8807 86.5 49 85.3807 49 84C49 78.4772 53.4772 74 59 74C64.5228 74 69 78.4772 69 84C69 85.3807 70.1193 86.5 71.5 86.5C72.8807 86.5 74 85.3807 74 84C74 75.7157 67.2843 69 59 69ZM109 69C100.716 69 94 75.7157 94 84C94 85.3807 95.1193 86.5 96.5 86.5C97.8807 86.5 99 85.3807 99 84C99 78.4772 103.477 74 109 74C114.523 74 119 78.4772 119 84C119 85.3807 120.119 86.5 121.5 86.5C122.881 86.5 124 85.3807 124 84C124 75.7157 117.284 69 109 69ZM42.1042 111.899C44.3825 114.959 47.1247 118.015 50.3409 120.87C59.5717 129.063 70.7958 134 84 134C97.2042 134 108.428 129.063 117.659 120.87C120.875 118.015 123.617 114.959 125.896 111.899C127.275 110.046 128.203 108.585 128.688 107.71C129.356 106.502 128.918 104.981 127.71 104.313C126.502 103.644 124.981 104.081 124.312 105.29C123.932 105.977 123.123 107.25 121.885 108.913C119.801 111.712 117.286 114.516 114.34 117.13C105.967 124.562 95.8783 129 84 129C72.1217 129 62.0334 124.562 53.6597 117.13C50.7144 114.516 48.1987 111.712 46.1149 108.913C44.8769 107.25 44.0679 105.977 43.6875 105.29C43.019 104.081 41.4978 103.644 40.2897 104.313C39.0816 104.981 38.644 106.502 39.3125 107.71C39.7967 108.585 40.725 110.046 42.1042 111.899Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-3xl title-font font-bold font-machina mb-3">
                    Nekaj dobrega <br />
                    zate
                  </h2>
                  <p className="leading-relaxed text-base">
                    Vitamini, minerali, proteini in probiotiki za tvoje zdravje.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center">
                <div className="w-40 h-40 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M84 13.9961C45.3668 13.9961 14 45.3629 14 83.9961C14 122.629 45.3668 153.996 84 153.996C122.633 153.996 154 122.629 154 83.9961C154 45.3629 122.633 13.9961 84 13.9961ZM84 18.5122C101.285 18.5122 116.952 25.2395 128.65 36.1622L88.5252 76.2869C87.901 72.9612 87.883 69.5374 88.7103 66.1874L89.451 63.1796C89.4686 63.1185 89.4837 63.0567 89.4961 62.9943C89.9427 62.8433 90.3308 62.5562 90.606 62.1735C90.8812 61.7907 91.0297 61.3317 91.0307 60.8603V57.5609C91.0307 56.5384 91.3378 55.6262 91.7718 54.7912C92.6958 57.6784 95.3644 59.8189 98.5374 59.8189H100.169V55.3028H98.5374C97.0755 55.3028 95.9176 54.1465 95.9176 52.6219V51.6781C96.2428 51.6239 96.5729 51.5783 96.9143 51.5783H100.169C102.303 51.5788 104.049 49.795 104.05 47.6796V42.7313C104.049 40.6159 102.303 38.8233 100.169 38.8238H80.6314C74.9009 38.8233 70.2407 43.5644 70.2407 49.3202V52.6191C70.2412 54.734 71.988 56.5262 74.1219 56.5266H75.7535C76.3163 56.5266 76.7503 56.9422 76.7503 57.5587V60.8575C76.7523 61.1903 76.8279 61.5189 76.9715 61.819L69.6414 78.5957C66.5682 85.5957 64.7563 93.0587 64.1376 100.665L36.1674 128.635C25.2452 116.937 18.5175 101.278 18.5175 83.9939C18.5175 47.8016 47.8086 18.51 84.0014 18.51L84 18.5122ZM131.843 39.3552C142.76 51.052 149.484 66.716 149.484 83.9961C149.484 120.189 120.193 149.48 84 149.48C66.7199 149.48 51.0557 142.747 39.359 131.83L131.843 39.3552ZM80.6305 43.3421H99.5332V47.0644H96.9134C91.1829 47.0644 86.5141 51.8051 86.5137 57.5609V58.6017H81.2655V57.5609C81.2659 54.5355 78.7861 52.0132 75.7526 52.0127H74.7559V49.3225C74.7559 45.9774 77.3712 43.3421 80.6305 43.3421ZM81.3274 63.1184H84.8116L84.3265 65.1024C83.0945 70.0928 83.2603 75.2686 84.6878 80.1239L69.4021 95.4099C70.2583 90.2584 71.6687 85.2169 73.7768 80.4149L81.3274 63.1184ZM92.0006 85.5508L88.6844 88.8673L91.7802 94.4507C94.8932 100.053 96.3935 104.388 96.3935 110.636V120.295C96.3935 122.73 94.5025 124.635 92.142 124.635H72.6133C70.2527 124.635 68.3618 122.73 68.3618 120.295V109.19L63.8457 113.706V120.295C63.8457 125.141 67.782 129.151 72.6133 129.151H92.142C96.9733 129.151 100.91 125.141 100.91 120.295V110.636C100.91 103.622 99.0417 98.2199 95.7318 92.2627L92.0006 85.5508ZM108.11 40.4707C108.382 40.3529 108.675 40.2901 108.971 40.2854C109.274 40.2807 109.574 40.3367 109.854 40.4503C110.135 40.5638 110.389 40.7325 110.603 40.9464C110.817 41.1603 110.986 41.4153 111.1 41.6956C111.213 41.976 111.269 42.2763 111.264 42.5788V47.7388C111.269 48.038 111.213 48.3349 111.102 48.6126C110.99 48.8903 110.825 49.1432 110.614 49.3563C110.404 49.5694 110.154 49.7386 109.878 49.8541C109.602 49.9696 109.306 50.0288 109.006 50.0288C108.707 50.0288 108.411 49.9696 108.135 49.8541C107.859 49.7386 107.608 49.5694 107.398 49.3563C107.188 49.1432 107.023 48.8903 106.911 48.6126C106.799 48.3349 106.744 48.038 106.748 47.7388V42.5788C106.744 42.2822 106.798 41.9873 106.907 41.7116C107.016 41.4359 107.178 41.1847 107.385 40.9718C107.591 40.7588 107.838 40.5884 108.11 40.4707Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-3xl title-font font-bold font-machina mb-3">
                    Brez aditivov in konzervansov
                  </h2>
                  <p className="leading-relaxed text-base">
                    Raje sveže, kot z nepotrebnimi dodatki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="text-gray-800 body-font pb-0 md:pb-20">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center md:mb-14 mb-8">
              <h1 className="md:text-5xl text-4xl font-bold title-font text-gray-900 font-machina mb-4">
                Kaj pravijo drugi?
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white bg-opacity-70 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-lg">
                    Najboljši tofu ever!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./images/vita.jpg"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Vita
                      </span>
                      <span className="text-gray-500 text-sm">
                        <a
                          href="https://littlekitchenvibes.com"
                          target="_blank"
                          className="inline-flex items-center hover:text-red-600"
                        >
                          Little Kitchen Vibes
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
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white bg-opacity-70 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-lg">
                    Veš ono ko doživiš eksistencialno krizo ko poskusiš tofu? No
                    to!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./images/fehta-profile.jpg"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Marcel
                      </span>
                      <span className="text-gray-500 text-sm">Instagram</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where to find us */}
        <section className="text-gray-600 body-font relative pb-20">
          <div className="text-center md:mb-14 mb-8">
            <h1 className="md:text-5xl text-4xl font-bold title-font text-gray-900 font-machina mb-4">
              Kako do dobrot?
            </h1>
          </div>
          <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 w-full h-96 md:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:pl-6 lg:text-left">
                <div className="flex flex-col mb-20 lg:items-start">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                      height="100%"
                    >
                      <g>
                        <path d="M92.2 48.9a2 2 0 00-.3-2.8L51.2 13.6a1.8 1.8 0 00-2.4 0L8.1 46.1a2 2 0 00-.3 2.8 2 2 0 001.6.7 1.7 1.7 0 001.2-.4l3.4-2.7v31.3a9 9 0 009 9h54a9 9 0 009-9V46.5l3.4 2.7a2 2 0 002.8-.3zM82 77.8a5 5 0 01-5 5H23a5 5 0 01-5-5V43.3l32-25.6 32 25.6z" />
                        <path d="M48.6 35.2C47.4 36.4 37 47.3 37 54a13.1 13.1 0 0011.1 13v7.8a1.9 1.9 0 002 2 2 2 0 002-2V67A13.1 13.1 0 0063 54c0-6.4-9.3-16.4-11.3-18.5a2 2 0 00-1.6-.9l-.8.2zM41 54c0-2.9 3.6-8 7.1-12.2v21.1A9 9 0 0141 54zm11.1 8.9v-21C55.5 46.1 59 51.2 59 54a9.1 9.1 0 01-6.9 8.9z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                      BIO trgovine v tvoji okolici
                    </h2>
                    <p className="leading-relaxed text-base">
                      Preveri kje se nahajajo Fehtine dobrote, in jih prevzemi v
                      tvoji najljubši BIO trgovini.
                    </p>
                    <a
                      href="/trgovine"
                      className="mt-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out inline-flex items-center"
                    >
                      Poglej kje se nahajamo
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
                </div>
                <div className="flex flex-col mb-10 items-start">
                  <div className="w-12 h-12 inline-flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                      height="100%"
                    >
                      <path d="M90.766 24.389L53.396 5.704c-1.873-.939-4.92-.938-6.79-.001L9.236 24.388c-1.342.669-2.112 1.76-2.113 2.991 0 .021.005.041.005.061v42.349c0 2.283 1.527 4.796 3.554 5.845l35.919 18.615c.968.5 2.183.751 3.397.751 1.217 0 2.434-.252 3.402-.755l35.916-18.61c2.025-1.051 3.554-3.564 3.554-5.847V27.464c.001-.028.007-.056.007-.085-.001-1.231-.772-2.322-2.111-2.99zM48.336 9.158c.796-.399 2.53-.4 3.33.001l36.445 18.222-16.443 8.222-38.111-19.054 14.779-7.391zm-.268 81.5L12.459 72.202c-.74-.384-1.468-1.579-1.468-2.414V31.252l35.617 17.81c.435.217.931.383 1.46.505v41.091zm.266-45.053L11.888 27.381l16.442-8.22 38.113 19.055-14.775 7.388c-.798.398-2.539.397-3.334.001zm40.673 24.182c0 .836-.728 2.033-1.469 2.418L51.932 90.654V49.566a6.682 6.682 0 001.463-.506l15.486-7.744v13.333l4.674-2.424V38.979l15.452-7.727v38.535z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-3">
                      Naroči na dom
                      <span className="font-normal text-sm"> (kmalu)</span>
                    </h2>
                    <p className="leading-relaxed text-base">
                      1. Napišeš kaj se ti lušta.
                    </p>
                    <p className="leading-relaxed text-base">
                      2. Ti nakažeš, mi pošljemo.
                    </p>
                    <p className="leading-relaxed text-base">3. Ti malicaš.</p>
                    <a
                      className="mt-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out inline-flex items-center"
                      href="mailto:info@fehta.com?subject=Hej%20Fehta!"
                    >
                      Napiši nam e-mail
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
                    <br />
                    <a
                      href="https://instagram.com/fehta.family/"
                      className="mt-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out inline-flex items-center"
                    >
                      Piši nam na Instagramu
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
