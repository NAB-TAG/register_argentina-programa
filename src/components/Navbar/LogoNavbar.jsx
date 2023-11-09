

const LogoNavbar = () => {
    return (
        <div className="col-md-3 navbar__logo">
            <div className="d-flex ">
                <button className="btn navbar__logo--btn"><i className="fa-solid fa-bars"></i></button>
                <a href="/">
                    <h1 className="m-0">NandoShop</h1>
                </a>
            </div>
        </div>
    );
}

export default LogoNavbar;