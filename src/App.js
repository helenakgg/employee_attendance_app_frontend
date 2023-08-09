import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// @import page
import LoginPage from "./pages/login";
import Dashboard from "./pages/Dashboard";
import AdminPage from "./pages/admin";
import Employees from "./pages/admin/Employees"
import CreateEmployee from "./pages/admin/CreateEmployee";
import EmployeePage from "./pages/employee"
import AttendaceHistory from "./pages/employee/AttendanceHistory";
import NotFoundPage from "./pages/not-found";

// @import component
import ProtectedRoute from "./protected.routes"

// @import action
import { keepLogin } from "./store/slices/auth/slices"

function App() {
    // @hooks
	const dispatch = useDispatch()
	const { isKeepLoginLoading } = useSelector(state => {
		return {
			isKeepLoginLoading : state.auth?.isKeepLoginLoading
		}
	})
	const { roleId } = useSelector(state => {
        return {
            roleId : state.auth?.roleId
        }
    })

	// @side effect
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
		dispatch(keepLogin());
		}
	}, []);

	if (isKeepLoginLoading) return (
		<div className="h-screen w-screen flex flex-row align-bottom justify-center">
			<span className="loading loading-dots loading-lg"></span>
		</div>
	)

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-yellow-50 to-transparent dark:from-yellow-900">
			<Routes>
				<Route 
					path="/" 
					element={
						<ProtectedRoute>
							{/* <Dashboard/> */}
							{
							roleId == 1 ?
							<Dashboard/> : <EmployeePage/>
							}
						</ProtectedRoute>
					} 
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin" element={<Employees />} />
				<Route path="/admin/create" element={<CreateEmployee />} />
				<Route path="/employee/history" element={<AttendaceHistory />} />
        
				<Route path="*" element={<NotFoundPage/>} />

			</Routes>
			<Toaster/>

        </div>
    );
    }

export default App;
