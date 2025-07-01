import Banner from "@/components/module/Banner";
import Navbar from "@/components/module/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default MainLayout;
