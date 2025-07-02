import Banner from "@/components/module/Banner";
import Footer from "@/components/module/Footer";
import Navbar from "@/components/module/Navbar";
import AllBooks from "@/pages/AllBooks";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <AllBooks></AllBooks>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
