import LogoNavbar from "./LogoNavbar";
import SearchNavbar from "./SearchNavbar";
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <header className="navbar p-0" id="navbar">

                    {/* <TopNavbar /> */}
                    <div className="d-flex col-md-12 container align-items-center my-4 d-flex">

                        {/* <CategoriesNavbar /> */}
                        <LogoNavbar />
                        <nav className="navbar__search align-items-start col-md-9">
                            <SearchNavbar className="navbar__search--search" />
                        </nav>
                    </div>
                    <SearchNavbar className="container navbar__search--mobile"/>
            </header>
        </>
    );
}

export default Navbar