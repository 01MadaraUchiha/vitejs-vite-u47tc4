import React from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CalendarPage from './components/CalendarPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </>
  )
);

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
