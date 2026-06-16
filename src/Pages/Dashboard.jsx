import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <div className="page-header">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back, Admin. Here's your lease overview.</p>
          </div>

          <button className="primary-btn">+ Add Lease</button>
        </div>

        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Total Properties</p>
              <h2>24</h2>
              <span className="success-text">+3 this month</span>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Total Tenants</p>
              <h2>58</h2>
              <span className="success-text">+8 active</span>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Active Leases</p>
              <h2>42</h2>
              <span className="success-text">Stable</span>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="stat-card warning-card">
              <p>Expiring Soon</p>
              <h2>6</h2>
              <span className="warning-text">Needs review</span>
            </div>
          </div>
        </div>

        <div className="content-card mt-4">
          <h4>Recent Leases</h4>

          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Lease No</th>
                <th>Tenant</th>
                <th>Property</th>
                <th>Rent</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>L-1001</td>
                <td>John Smith</td>
                <td>Prague Office Space</td>
                <td>€1,500</td>
                <td><span className="badge bg-success">Active</span></td>
              </tr>

              <tr>
                <td>L-1002</td>
                <td>Emma Brown</td>
                <td>Retail Store</td>
                <td>€950</td>
                <td><span className="badge bg-warning text-dark">Expiring</span></td>
              </tr>

              <tr>
                <td>L-1003</td>
                <td>David Wilson</td>
                <td>Warehouse Unit</td>
                <td>€2,200</td>
                <td><span className="badge bg-primary">Renewal</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;