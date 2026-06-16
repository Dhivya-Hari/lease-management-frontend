import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Leases() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    loadLeases();
  }, []);

  const loadLeases = async () => {
    const response = await api.get("/Leases");
    setLeases(response.data);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <div className="page-header">
          <div>
            <h2>Leases</h2>
            <p>Data coming from .NET API + SQL Server</p>
          </div>
        </div>

        <div className="content-card mt-4">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Lease No</th>
                <th>Property</th>
                <th>Tenant</th>
                <th>Rent</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {leases.map((lease) => (
                <tr key={lease.id}>
                  <td>{lease.leaseNo}</td>
                  <td>{lease.property}</td>
                  <td>{lease.tenant}</td>
                  <td>€{lease.rent}</td>
                  <td>
                    <span className="badge bg-success">{lease.status}</span>
                  </td>
                </tr>
              ))}

              {leases.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No leases found. Add lease data from Swagger first.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leases;