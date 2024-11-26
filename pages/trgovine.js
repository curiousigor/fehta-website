import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/head-navigation";
import Footer from "../components/footer";

// import images
import AjdaMBImage from "../public/images/ajda-maribor.jpg";
import BajkaImage from "../public/images/bajka.jpg";
import BiotopicCEImage from "../public/images/biotopic-celje.jpg";
import BiotopicLJImage from "../public/images/biotopic-ljubljana.jpg";
import BiotopicMBImage from "../public/images/biotopic-maribor.jpg";
import DobraMiselImage from "../public/images/dobra-misel.jpg";
import GustImage from "../public/images/gust.jpg";
import VeganskoImage from "../public/images/vegansko.jpg";
import VegevitaImage from "../public/images/vegevita.jpg";
import ZlataPtickaImage from "../public/images/zlata-pticka.jpg";
import ZrnoDoZrnaImage from "../public/images/zrno-do-zrna.jpg";

export default function Home() {
    return (
        <div>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Fehta tofu in tempeh - Trgovine</title>
                <meta
                    name="description"
                    content="Fehta razbija mite o neokusni rastlinski prehrani in nepoznavanju receptov, ter rešuje govorice, da je tofu - fuj, da ga jedo samo obsedeni vegani, ter da je tempeh gobica za čiščenje obraza. (To je resnična zgodba.)"
                />
                <link rel="icon" href="/favicon.ico" />

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/images/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#ffc40d" />
                <meta
                    name="msapplication-config"
                    content="/images/browserconfig.xml"
                />
                <meta name="theme-color" content="#ffffff" />
                {/* Keywords */}
                <meta
                    name="keywords"
                    content="fehta, tofu, tempeh, food, hrana za vse, dobra hrana, recept, recepti, rastlinsko"
                />

                {/* <!-- Google / Search Engine Tags --> */}
                <meta
                    itemprop="name"
                    content="Fehta tofu in tempeh - Trgovine"
                />
                <meta
                    itemprop="description"
                    content="Fehta razbija mite o neokusni rastlinski prehrani in nepoznavanju receptov, ter rešuje govorice, da je tofu - fuj, da ga jedo samo obsedeni vegani, ter da je tempeh gobica za čiščenje obraza. (To je resnična zgodba.)"
                />
                <meta
                    itemprop="image"
                    content="https://fehta.com/images/share-image.jpg"
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://fehta.com" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Fehta tofu in tempeh - Trgovine"
                />
                <meta
                    property="og:description"
                    content="Fehta razbija mite o neokusni rastlinski prehrani in nepoznavanju receptov, ter rešuje govorice, da je tofu - fuj, da ga jedo samo obsedeni vegani, ter da je tempeh gobica za čiščenje obraza. (To je resnična zgodba.)"
                />
                <meta
                    property="og:image"
                    content="https://fehta.com/images/share-image.jpg"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Fehta tofu in tempeh - Trgovine"
                />
                <meta
                    name="twitter:description"
                    content="Fehta razbija mite o neokusni rastlinski prehrani in nepoznavanju receptov, ter rešuje govorice, da je tofu - fuj, da ga jedo samo obsedeni vegani, ter da je tempeh gobica za čiščenje obraza. (To je resnična zgodba.)"
                />
                <meta
                    name="twitter:image"
                    content="https://fehta.com/images/share-image.jpg"
                />
                <script
                    defer
                    data-domain="fehta.com"
                    src="https://plausible.hey.si/js/script.hash.outbound-links.js"></script>
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
                                Najdi Fehto v eni od BIO trgovin v tvoji
                                okolici.
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
                            frameBorder="0"></iframe>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {/* Store */}
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image
                                        alt="Image of Ajda store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={AjdaMBImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Ekološka trgovina Ajda
                                        </h2>
                                        <a href="https://goo.gl/maps/EnruoXm7ijF2Uhhn9">
                                            <h3 className="text-gray-500 mb-3">
                                                Glavni trg 23, <br />
                                                2000 Maribor
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/EnruoXm7ijF2Uhhn9">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Biotopic Maribor store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={BiotopicMBImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Biotopic Maribor
                                        </h2>
                                        <a href="https://goo.gl/maps/3LVpishi8uW2RtWF6">
                                            <h3 className="text-gray-500 mb-3">
                                                Pobreška cesta 18, <br />
                                                2000 Maribor
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/3LVpishi8uW2RtWF6">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Biotopic Celje store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={BiotopicCEImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Biotopic Celje
                                        </h2>
                                        <a href="https://goo.gl/maps/DVxUsreCcbEMWEcR7">
                                            <h3 className="text-gray-500 mb-3">
                                                Mariborska cesta 100, <br />
                                                3000 Celje
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/DVxUsreCcbEMWEcR7">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Biotopic Ljubljana store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={BiotopicLJImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Biotopic Ljubljana
                                        </h2>
                                        <a href="https://goo.gl/maps/q7Wi8M5ijXVwQpjX6">
                                            <h3 className="text-gray-500 mb-3">
                                                Megamarket Interspar, Jamova
                                                cesta 105, <br />
                                                1000 Ljubljana
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/q7Wi8M5ijXVwQpjX6">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Vegansko.si store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={VeganskoImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Vegansko.si
                                        </h2>
                                        <a href="https://g.page/Vegansko?share">
                                            <h3 className="text-gray-500 mb-3">
                                                Trg mladinskih delovnih brigad
                                                10, <br />
                                                1000 Ljubljana
                                            </h3>
                                        </a>
                                        <a href="https://g.page/Vegansko?share">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Gušt store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={GustImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Trgovina Gušt
                                        </h2>
                                        <a href="https://g.page/TrgovinaGust?share">
                                            <h3 className="text-gray-500 mb-3">
                                                Ljubljanska cesta 73, <br />
                                                1230 Domžale
                                            </h3>
                                        </a>
                                        <a href="https://g.page/TrgovinaGust?share">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Zlata Ptička store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={ZlataPtickaImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Zlata ptička
                                        </h2>
                                        <a href="https://goo.gl/maps/qCb8CFNCx9scG3sx8">
                                            <h3 className="text-gray-500 mb-3">
                                                Šutna 2, <br />
                                                1241 Kamnik
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/qCb8CFNCx9scG3sx8">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Dobra Misel store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={DobraMiselImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Dobra Misel
                                        </h2>
                                        <a href="https://g.page/Dobramisel?share">
                                            <h3 className="text-gray-500 mb-3">
                                                Železniška ulica 5, <br />
                                                4248 Lesce
                                            </h3>
                                        </a>
                                        <a href="https://g.page/Dobramisel?share">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Zrno do Zrna store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={ZrnoDoZrnaImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Zrno do Zrna
                                        </h2>
                                        <a href="https://goo.gl/maps/RPDbF25i5Kkmx8sY6">
                                            <h3 className="text-gray-500 mb-3">
                                                Trubarjeva cesta 8, <br />
                                                1000 Ljubljana
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/RPDbF25i5Kkmx8sY6">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Bajka store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={BajkaImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            Bajka
                                        </h2>
                                        <a href="https://goo.gl/maps/LGLZzfFjiEUqSNrq8">
                                            <h3 className="text-gray-500 mb-3">
                                                Panonska ulica 8, <br />
                                                9250 Gornja Radgona
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/LGLZzfFjiEUqSNrq8">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
                                    <Image
                                        alt="Image of Vegevita store"
                                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                        loading="lazy"
                                        src={VegevitaImage}
                                    />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-gray-900">
                                            VEGEvita
                                        </h2>
                                        <a href="https://goo.gl/maps/HcnR9qmDCHe6gv7M7">
                                            <h3 className="text-gray-500 mb-3">
                                                Ljubljanska cesta 40, <br />
                                                2310 Slovenska Bistrica
                                            </h3>
                                        </a>
                                        <a href="https://goo.gl/maps/HcnR9qmDCHe6gv7M7">
                                            <h3 className="text-sm text-red-600 hover:text-red-800 transition duration-200 ease-in-out mb-3 inline-flex items-center">
                                                Poglej na Google Maps
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24">
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
