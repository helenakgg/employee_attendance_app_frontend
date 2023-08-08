import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// @import page
import LoginPage from "./pages/auth/login";
import AdminPage from "./pages/admin";
import EmployeePage from "./pages/employee"
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
	const { role } = useSelector(state => {
        return {
            role : state.auth.role
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
							{
							role == 1 ?
							<AdminPage/> : <EmployeePage/>
							}
						</ProtectedRoute>
					} 
				/>
				<Route path="/login" element={<LoginPage />} />
        
				<Route path="*" element={<NotFoundPage/>} />

			</Routes>
			<Toaster/>

        </div>
    );
    }

export default App;
