import type { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";
import { Fragment, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import type { Page } from "../types/page";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.style";
import { motion, AnimatePresence } from "framer-motion";
import Mobile from "../components/Navbar/Mobile";

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};
const MyApp = ({ Component, pageProps, router }: Props) => {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  const pageTransition = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.85 },
    },
    exit: {
      opacity : 0,
      filter: `invert()`,
    },
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Porto-RifqiF</title>
          <meta name="description" content="Rifqi F Portofolio WebApp" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar open={isOpen} toggle={toggle}/>
        {isOpen && <Mobile open={isOpen} toggle={toggle}/>} 
        <AnimatePresence>
          <motion.div
            key={router.route}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {getLayout(<Component {...pageProps} />)}
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </Layout>
  );

  // or swap the layout rendering priority
  // return getLayout(<Layout><Component {...pageProps} /></Layout>)
};

export default MyApp;
