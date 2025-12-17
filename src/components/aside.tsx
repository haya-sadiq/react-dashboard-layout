function Aside() {
  return (
    <aside className=" hidden lg:flex bg-white w-80 h-140 rounded-xl mt-28 mx-5 p-6 flex-col justify-between">
        <nav>
            <ul className="space-y-6">
              <li className="text-gray-600 px-4 py-3 bg-gray-200 hover:bg-gray-100 rounded-lg active:text-gray-800" ><a href="#">Dashboard</a></li>
              <li className="text-gray-600 px-4 py-3 hover:bg-gray-100 rounded-lg active:text-gray-800"><a href="#">Analytics</a></li>
              <li className="text-gray-600 px-4 py-3 hover:bg-gray-100 rounded-lg active:text-gray-800"><a href="#">Reports</a></li>
              <li className="text-gray-600 px-4 py-3 hover:bg-gray-100 rounded-lg active:text-gray-800"><a href="#">Setting</a></li>
            </ul>
        </nav>
        <button type="button" role="Logout" className="bg-red-500 text-white hover:bg-red-600 px-4 py-3 w-full rounded-lg cursor-pointer">Logout</button> 
    </aside>
  );
}

export default Aside;
