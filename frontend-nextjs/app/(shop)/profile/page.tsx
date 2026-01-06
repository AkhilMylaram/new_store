'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Ice Cream Lane',
  })

  const handleSave = () => {
    toast.success('Profile updated successfully')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="card p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            className="w-full p-2 border rounded"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            className="w-full p-2 border rounded"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            className="w-full p-2 border rounded"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </div>
        <button onClick={handleSave} className="btn btn-primary w-full py-2">
          Save Changes
        </button>
      </div>
    </div>
  )
}