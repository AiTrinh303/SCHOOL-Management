const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
       {/* USER CARD */}
       <UserCard type="admin" />
      </div>
      <UserCard type="admin" />
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 '>Right Content</div>
    </div>
  )
}

export default AdminPage