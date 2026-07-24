function Dashboard() {
  return (
    <>
      <div className="dashboard-cards">
        <div className="card">
          <h4>Total Products</h4>
          <h2>0</h2>
        </div>

        <div className="card">
          <h4>Total Suppliers</h4>
          <h2>0</h2>
        </div>

        <div className="card">
          <h4>Total Purchases</h4>
          <h2>0</h2>
        </div>

        <div className="card">
          <h4>Total Sales</h4>
          <h2>0</h2>
        </div>
      </div>

      <div className="table-container">
        <h3>Recent Activity</h3>

        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>No recent activity</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;