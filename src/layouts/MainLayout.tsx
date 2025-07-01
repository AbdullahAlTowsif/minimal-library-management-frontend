import Banner from "@/components/module/Banner";
import Navbar from "@/components/module/Navbar";
import AllBooks from "@/pages/AllBooks";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
                <AllBooks></AllBooks>
            </div>
        </div>
    );
};

export default MainLayout;
