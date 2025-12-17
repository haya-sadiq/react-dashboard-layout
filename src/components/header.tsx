
function Header(){
    return(
       <header
      className="fixed top-0 w-full h-20 p-3 xs:p-4 lg:px-20 lg:py-3 flex justify-between items-center bg-linear-to-r from-yellow-400 to-yellow-500 text-white "
    >
      <h1 className="text-2xl xs:text-3xl underline decoration-solid p-2">
        <a href="index.html">DASHBOARD</a>
      </h1>
      <div className="flex items-center gap-x-2 xs:gap-x-4 md:gap-x-8">
        {/* search icon hidden on below 768px */}
        <div className="md:hidden">
             <i className="fa-solid fa-magnifying-glass text-lg p-3 text-yellow-900 bg-white rounded-full hover:bg-gray-100 xs:text-2xl xs:px-3.5 xs:py-3"></i>
        </div>

        {/* header icon visible on 768px */}
        <div className="relative hidden md:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            ><i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="search"
            placeholder="Search..."
            className=" bg-yellow-200 px-8 py-2 rounded-md placeholder:text-yellow-700 text-black focus:outline-none"
          />
        </div>
        <div className="cursor-pointer">
          <i
            className="fa-solid fa-user text-lg p-3 xs:text-2xl md:text-3xl text-yellow-900 xs:px-3.5 xs:py-3 bg-white rounded-full hover:bg-gray-100"
          ></i>
        </div>
      </div>
    </header>
    )
}


export default Header