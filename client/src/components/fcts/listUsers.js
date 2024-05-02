import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
// import '../p/style.css';

export function UsersPage(type, flag) {
  console.log("Type:", type, "Flag:", flag);
  let [content, setContent] = useState(<UserList flag={flag} type={type} showForm={showForm} />);

  function showlist() {
    setContent(<UserList flag={flag} type={type} showForm={showForm} />);
    // setContent(UserList(flag, type, showForm));
  };

  function showForm(userObj) {
    setContent(< AddUser flag={flag} type={type} userObj={userObj} goBack={showlist} />);
  };

  // Effect to update content when flag or type changes
  useEffect(() => {
    setContent(<UserList flag={flag} type={type} showForm={showForm} />);
    // setContent(< AddUser flag={flag} type={type} userObj={userObj} goBack={showlist} />)
  }, [flag, type]);

  return (<>
    <div className='container my-5'>
      {content}</div>
  </>);
}


export function UserList({ flag, type, showForm }) {

  console.log("Type:", type, "Flag:", flag);
  const [users, setUsers] = useState([]);

  // var*+9/*flag1 = props.flag;
  // console.log(flag1);
  function fetchUsers() {
    fetch("/api/admin")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => { fetchUsers(); }, []);

  function deleteUser(id) {
    fetch("/api/admin/" + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Delete successful', data);
        fetchUsers(); // Make sure fetchUsers() properly updates the UI
      })
      .catch(error => console.error('Error deleting user:', error));
  }

  return (
    <>
      <Button type="" onClick={() => fetchUsers()} variant="primary">Refresh</Button>{' '}
      {/* <Button type="" onClick={() => fetchUsers()}>Refresh</Button> */}
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">status</th>
            <th scope="col">organistaion name</th>
          </tr>
        </thead>
        {<tbody>
          {users.map((user) => (user.flag === flag && user.type === type &&
            <tr key={user._id}>
              <th scope="row">{user.name}</th>
              <th>  {user.email}</th>
              <th>  {user.status}</th>
              <th>  {user.org}</th>
              <th>
                {/* <Button variant="info" onClick={() => props.showForm(user)}>Info</Button>{' '} */}
                <Button variant="info" onClick={() => showForm(user)}>Info</Button>{' '}
                <Button variant="danger" onClick={() => deleteUser(user._id)} >Delete</Button>{' '}

              </th>
            </tr>))}
        </tbody>}
      </Table>

      <button onClick={() => showForm({})} type="">Add User</button >
      {/* <button onClick={() => props.showForm({})} type="">Add User</button > */}

    </>
  );
}


function AddUser({ type, flag, userObj, goBack }) {
  const [errorMessage, setErrorMessage] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    //read form data
    const formData = new FormData(event.target);

    //conver form data to object
    const userObj = Object.fromEntries(formData.entries())
    // form validation
    if (!userObj.name || !userObj.email || !userObj.status) {
      console.log("Please fill out all fields");
      setErrorMessage(
        <div className="alert alert-warning" role="alert">
          Please provide all the required fields !
        </div>
      )
      return;
    }

    if (userObj._id) {
      // Assuming userObj is defined and has a property _id
      fetch("/api/admin/" + userObj._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // This parses JSON response into native JavaScript objects
        })
        .then(data => {
          console.log('Update successful:', data);
        })
        .catch(error => {
          console.error('Error during fetch operation:', error);
        })
        .finally(() => {
          console.log("update complete");
        });

    } else {
      //create new user
      userObj.createdAt = new Date().toISOString().slice(0, 10);
      fetch("/api/admin", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        .then((res) => { return res.json() })
        .then((data) => console.log(data))
      console.log("create");
    }

    //chat reply for submit
    setTimeout(() => {
      console.log("Form submitted: ", userObj);
      goBack();  // Call goBack after form operations are successful
    }, 1000);
  }

  return (
    <div className="add-user">
      < h2 > {userObj._id ? "Edit Product" : "Add a User"}</ h2 >

      {errorMessage}

      <Form onSubmit={(event) => handleSubmit(event)} >
        <div className="new_user">
          {userObj._id &&
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label" htmlFor="_id" >ID</label>
              <div className="col-sm-8">
                <input readOnly className="form-control-plaintext" name="_id" defaultValue={userObj._id}></input>
              </div></div>}

          <div hidden className="row mb-3">
            <label className="col-sm-4 col-form-label" htmlFor="flag" >ID</label>
            <div className="col-sm-8">
              <input readOnly className="form-control-plaintext" name="flag" defaultValue={flag}></input>
            </div></div>

          <div hidden className="row mb-3">
            <label className="col-sm-4 col-form-label" htmlFor="type" >TYPE</label>
            <div className="col-sm-8">
              <input readOnly className="form-control-plaintext" name="type" defaultValue={type}></input>
            </div></div>

          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
            <div className="col-sm-8">
              <input defaultValue={userObj ? userObj.name : ""} className="form-control" name="name" placeholder="saisir le nom"></input>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="Email" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input defaultValue={userObj ? userObj.email : ""} className="form-control" name="email" placeholder="saisir email (exemple: example@gmail.com)"></input>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="org" className="col-sm-4 col-form-label">organisation name</label>
            <div className="col-sm-8">
              <input defaultValue={userObj ? userObj.org : ""} className="form-control" name="org" placeholder="saisir org"></input>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="dob" className="col-sm-4 col-form-label">Date of birth</label>
            <div className="col-sm-8">
              <input defaultValue={userObj ? userObj.dob : ""} className="form-control" name="dob" placeholder="saisir email (exemple: example@gmail.com)"></input>
            </div>
          </div>


          {/* <div className="row mb-3">
            <label htmlFor="gender" className="col-sm-4 col-form-label">Gender</label>
            <div className="col-sm-8">
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="gender"
                  type="radio"
                  id={`inline-radio-1`}
                  defaultChecked={userObj && userObj.gender === "Male"}
                  value={"Male"}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="gender"
                  type="radio"
                  id={`inline-radio-2`}
                  defaultChecked={userObj && userObj.gender === "Female"}
                  value={'Female'}
                />
              </div></div>
          </div> */}

          <div className="row mb-3">
            <label htmlFor="gender" className="col-sm-4 col-form-label">Status</label>
            <div className="col-sm-8">
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Active"
                  name="status"
                  type="radio"
                  id={`inline-radio-1`}
                  defaultChecked={userObj && userObj.status === "Active"}
                  value={"Active"}
                />
                <Form.Check
                  inline
                  label="Suspended"
                  name="status"
                  type="radio"
                  id={`inline-radio-2`}
                  defaultChecked={userObj && userObj.status === "Suspended"}
                  value={"Suspended"}
                />
                <Form.Check
                  inline
                  label="Archived"
                  name="status"
                  type="radio"
                  id={`inline-radio-2`}
                  defaultChecked={userObj && userObj.status === "Archived"}
                  value={"Archived"}
                />
              </div></div>
          </div>

          <div className="row mb-3">
            <button type="submit" className="btn text-dark update"  > Save</button>
            {/* onSubmit={() => props.goBack()} */}
            <button type="button" onClick={() => goBack({})} >Cancel</button>
          </div>
        </div>
      </Form >

    </div >
  );
}


