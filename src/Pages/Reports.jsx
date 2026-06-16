import Sidebar from "../components/Sidebar";

function Reports() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="page-header">
          <div>
            <h2>Reports</h2>
            <p>Lease summary and revenue insights</p>
          </div>
          <button className="primary-btn">Export Report</button>
        </div>

        <div className="row mt-4">
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Total Revenue</p>
              <h2>€64K</h2>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Active Leases</p>
              <h2>42</h2>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card">
              <p>Expired Leases</p>
              <h2>8</h2>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="stat-card warning-card">
              <p>Pending Renewals</p>
              <h2>6</h2>
            </div>
          </div>
        </div>

        <div className="content-card mt-4">
          <h4>Monthly Lease Revenue</h4>
          <p className="text-muted">Chart will be connected later using API data.</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;