export default function AdminInventoryPage() {
  const inventory = [
    { name: 'Vanilla Bean', stock: 120, status: 'In Stock' },
    { name: 'Chocolate Fudge', stock: 85, status: 'In Stock' },
    { name: 'Mint Chip', stock: 15, status: 'Low Stock' },
    { name: 'Strawberry Swirl', stock: 0, status: 'Out of Stock' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory View</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {inventory.map((item, i) => (
          <div key={i} className="card p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.name}</h3>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  item.status === 'Out of Stock'
                    ? 'bg-red-100 text-red-700'
                    : item.status === 'Low Stock'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Stock: {item.stock}</p>
          </div>
        ))}
      </div>
    </div>
  )
}