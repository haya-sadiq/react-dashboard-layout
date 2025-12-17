function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 ">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i className="fa-solid fa-circle text-[8px] text-green-500"></i>
        <div>
          <a href="#" className="text-sm font-medium text-gray-800">New user registered</a>
          <p className="text-xs text-gray-500">2 minutes ago</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i className="fa-solid fa-circle text-[8px] text-blue-500"></i>
        <div>
          <a href="#" className="text-sm font-medium text-gray-800">New user registered</a>
          <p className="text-xs text-gray-500">2 minutes ago</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <i className="fa-solid fa-circle text-[8px] text-yellow-500"></i>
        <div>
          <a href="#" className="text-sm font-medium text-gray-800">New user registered</a>
          <p className="text-xs text-gray-500">2 minutes ago</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RecentActivity;
