import React, {useState} from 'react'

const FormEditEmployee = () => {
  return (
    <div>
        <h1 className="title">Employees</h1>
        <h2 className="subtitle"> Edit Employee </h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form>
                        <p className="has-text-centered"></p>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    type="text"
                                    className="input"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        // value={name}
                                        // onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                        </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                <input
                                    type="password"
                                    className="input"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="******"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                <input
                                    type="password"
                                    className="input"
                                    // value={confPassword}
                                    // onChange={(e) => setConfPassword(e.target.value)}
                                    placeholder="******"
                                />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Birthdate</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        // value={birthdate}
                                        // onChange={(e) => setBirthdate(e.target.value)}
                                        placeholder="Birthdate"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Join Date</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        // value={joinDate}
                                        // onChange={(e) => setJoinDate(e.target.value)}
                                        placeholder="JoinDate"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Shift</label>
                                <div className="control">
                                <div className="select is-fullwidth">
                                    <select
                                    
                                    >
                                    <option value="admin">SH1</option>
                                    <option value="user">SH2</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Salary</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        // value={salary}
                                        // onChange={(e) => setSalary(e.target.value)}
                                        placeholder="Salary"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                <button type="submit" className="button is-danger">
                                    Update
                                </button>
                                </div>
                            </div>
                </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditEmployee