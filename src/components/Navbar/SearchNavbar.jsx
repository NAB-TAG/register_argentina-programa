const SearchNavbar = ({ className }) => {
    return (
        <div className={`col-md-12 ${ className } `}>
            <form action="" className="col-md-9" onSubmit={ (e) => e.preventDefault() }>

                <input type="text" className="w-100" placeholder="Funda para Samsung"  />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>

        </div>
    );
}

export default SearchNavbar;