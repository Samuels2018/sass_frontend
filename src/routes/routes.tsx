import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { RegisterPage } from '../pages/registerPage/RegisterPage';
import { ProfilePage } from '../pages/profilePage/ProfilePage';

export const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        index: true,
        element: (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Auth App</h1>
            <p className="mt-4 text-lg text-gray-600">
              Please sign in or register to continue
            </p>
          </div>
        ),
      },
    ],
  },
];