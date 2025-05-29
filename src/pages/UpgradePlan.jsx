import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const UpgradePlan = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 sm:px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Upgrade Plan</h2>
        <p className="text-gray-700 mb-2">
          You’ve reached your free upload limit. Upgrade now to continue uploading more documents.
        </p>

        <div className="my-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src={assets.upgrade_plan} alt="upgrade_plan" />
          </div>
          <p className="text-sm text-gray-600 mt-2">Scan this QR code with any UPI app</p>
        </div>

        <div className="text-left mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Plan Details</h3>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li>₹19 Payment</li>
            <li>Upload up to 25 documents</li>
            <li>Priority support</li>
            <li>Plan valid for 1 month</li>
          </ul>
        </div>

         <div className="bg-yellow-100 text-yellow-900 text-sm p-4 rounded mb-4">
          <strong>After Payment:</strong>
          <ul className="list-disc list-inside mt-1 text-start">
            <li>Delete one of your existing documents.</li>
            <li>Post a <strong>screenshot</strong> of the valid payment receipt as a document.</li>
            <li>Wait for admin verification and activation.</li>
          </ul>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          For assistance, contact support at: <br />
          <span className="font-medium text-gray-800">usedemo.me@gmail.com</span> or <span className="font-medium text-gray-800">+91************</span>
        </p>

        <Link to="/" className="text-green-700 underline text-sm">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UpgradePlan;
