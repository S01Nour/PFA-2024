import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { UsersPage } from '../fcts/listUsers.js'

function Admin() {

  const [page, setPage] = useState('agent');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (<>
    <h2>Admin Page</h2>
    {/* 
    <Button variant="light"><Link to="/api/admin" onClick={() => UserList("agent", "admin")} >agent</Link></Button>
    <Button variant="light"><Link to="/api/admin" onClick={() => UsersPage("repair", "admin")}>repair</Link></Button>
    <Button variant="light"><Link to="/api/admin" onClick={() => UsersPage("shop", "admin")}>Shop</Link></Button>
    */}

    <div>
      <Button variant="light" onClick={() => handlePageChange('agent')}>
        Agent
      </Button>
      <Button variant="light" onClick={() => handlePageChange('repair')}>
        Repair
      </Button>
      <Button variant="light" onClick={() => handlePageChange('shop')}>
        Shop
      </Button>

      <div>
        {/* {page === 'agent' && UsersPage({ type: "agent", flag: "admin" })} */}
        {page === 'agent' && UsersPage("agent", "admin")}
        {page === 'repair' && UsersPage("repair", "admin")}
        {page === 'shop' && UsersPage("shop", "admin")}
      </div>
    </div>
  </>
  );
}
export default Admin;
