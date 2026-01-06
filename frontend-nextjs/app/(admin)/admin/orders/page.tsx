export default function AdminOrdersPage() {
  const orders = [
    { id: 'ORD-1001', customer: 'John Doe', total: 24.95, status: 'Processing' },
    { id: 'ORD-1002', customer: 'Jane Smith', total: 15.49, status: 'Shipped' },
    { id: 'ORD-1003', customer: 'Bob Johnson', total: 32.0, status: 'Delivered' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders Dashboard</h1>
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">${order.total.toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      order.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-700'
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}