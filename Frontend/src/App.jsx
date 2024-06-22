import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'

const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const Cart = lazy(() => import('./pages/cart'))
const Shipping = lazy(() => import('./pages/Shipping.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Orders = lazy(() => import('./pages/Orders.jsx'))
const OrderDetails = lazy(() => import('./pages/OrderDetails.jsx'))

// Admin Router Importing........

const Dashboard = lazy(() => import("./pages/admin/dashboard.jsx"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(() => import("./pages/admin/management/productmanagement"));
const TransactionManagement = lazy(() => import("./pages/admin/management/transactionmanagement"));


const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />

          {/* Not Logged in Route */}
          <Route path='/login' element={<Login />} />

          {/* Logged In User Routes */}
          <Route>
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/order/:id' element={<OrderDetails />} />
          </Route>

          {/* Admin Routes..... */}

          <Route
          // element={<ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />}
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />
            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
          </Route>;
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App