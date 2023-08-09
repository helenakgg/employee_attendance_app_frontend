import React from 'react'

const EmployeeList = () => {
  return (
    <div>
        <h1 className="title">Employees</h1>
        <h2 className="subtitle">List of Employees</h2>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birthdate</th>
                    <th>Join Date</th>
                    <th>Shift</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeList