import { Tajawal } from "next/font/google";
import "./global.css";
import Navbar from "./(components)/Navbar/Navbar";
import Footer from "./(components)/Footer/Footer";

const inter = Tajawal({ subsets: ["arabic"], weight: ["200", "300", "500", "700", "800", "900"] });


const RootLayout = ({ children }) => {
    return (
        <html lang="ar" className={inter.className}>
            <body >

                  <Navbar />
                     {children}
                  <Footer />
                </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
