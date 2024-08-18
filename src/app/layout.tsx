import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.scss";
import Header from '../library/components/Header/Header';
import Footer from "@/library/components/Footer/Footer";

import '@fortawesome/fontawesome-svg-core/styles.css';
import {MAIN_NAV_MENU_ITEMS} from "@/library/utils/content";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
			<html lang="en">
			<body className={poppins.className}>
			<Header/>
			{children}
			<Footer />
			</body>
			</html>
	);
}
