import RecentActivity from "./recent-activity";
import Contact from "./contact-us-form";

function Main() {
  return (
    <main className="mt-28 w-full mx-5 ">
      <div className="bg-white rounded-xl p-6">
        <div className="text-center sm:text-start sm:flex gap-x-6">
          <div>
            <i className="fa-regular fa-user text-3xl text-white px-4.5 py-4 bg-linear-to-r from-blue-400 to-blue-600 rounded-full"></i>
          </div>
          <div>
            <h2 className="my-2 sm:mt-0 text-2xl sm:text-3xl font-bold text-gray-800">
              Welcome back, John!
            </h2>
            <p className="text-gray-600 my-2">
              Here's what's happening with your dashboard today.
            </p>
          </div>
        </div>
        <div className="flex-col flex sm:ml-21 sm:flex-row my-7 sm:mt-4 gap-6">
          <div className="w-full bg-blue-50 p-4 rounded-xl sm:w-35 md:w-40">
            <p className="text-gray-600 font-medium">
              <span>
                <i className="fa-solid fa-chart-line text-blue-600 mr-4"></i>
              </span>
              Revenue
            </p>
            <p className="my-2 text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">
              $45,231
            </p>
          </div>
          <div className="w-full bg-green-50 p-4 rounded-xl sm:w-35 md:w-40">
            <p className="text-gray-600 font-medium">
              <span>
                <i className="fa-solid fa-users text-green-600 mr-4"></i>
              </span>
              Users
            </p>
            <p className="my-2 text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">
              1,234
            </p>
          </div>

          <div className="w-full bg-purple-50 p-4 rounded-xl sm:w-35 md:w-40">
            <p className="text-gray-600 font-medium">
              <span>
                <i className="fa-solid fa-arrow-trend-up text-purple-600 mr-4"></i>
              </span>
              Activity
            </p>
            <p className="my-2 text-lg xs:text-xl sm:text-2xl font-bold text-gray-800">
              +23%
            </p>
          </div>
        </div>
        <div className="sm:ml-21 space-y-5 space-x-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg w-full sm:w-auto ">
            View Details
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-lg w-full sm:w-auto">
            Download Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 my-8">
      <RecentActivity/>
      <Contact/>
      </div>
    </main>
  );
}

export default Main;
