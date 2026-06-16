import { Link } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaFileContract,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Smart Lease</h3>

      <ul>
        <li>
          <Link to="/dashboard"><FaHome /> Dashboard</Link>
        </li>
        <li>
          <Link to="/properties"><FaBuilding /> Properties</Link>
        </li>
        <li>
          <Link to="/tenants"><FaUsers /> Tenants</Link>
        </li>
        <li>
          <Link to="/leases"><FaFileContract /> Leases</Link>
        </li>
        <li>
          <Link to="/reports"><FaChartBar /> Reports</Link>
        </li>
        <li>
          <Link to="/"><FaSignOutAlt /> Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;