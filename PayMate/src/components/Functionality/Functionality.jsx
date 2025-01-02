import React, { useState, useEffect } from "react";
import "daisyui/dist/full.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Functionality = () => {
  const [formData, setFormData] = useState({
    currency: "",
    tripName: "",
    friendName: "",
  });
  const [friends, setFriends] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const currencyOptions = data
          .map((country) => ({
            code: country.currencies ? Object.keys(country.currencies)[0] : "",
            name: country.currencies
              ? Object.values(country.currencies)[0].name
              : "",
            symbol: country.currencies
              ? Object.values(country.currencies)[0].symbol
              : "",
            country: country.cca2,
          }))
          .filter(
            (currency) => currency.code && currency.name && currency.symbol
          )
          .sort((a, b) => a.country.localeCompare(b.country));
        setCurrencies(currencyOptions);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFriend = () => {
    if (formData.friendName) {
      setFriends((prevFriends) => [...prevFriends, formData.friendName]);
      setFormData((prevData) => ({
        ...prevData,
        friendName: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ ...formData, friends });
  };

  return (
    <>
      <div className="flex pt-20 justify-center min-h-screen">
        <div className="card w-96">
          <div className="card-body">
            <h2 className="card-title">Trip Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Trip Name</span>
                </label>
                <input
                  type="text"
                  name="tripName"
                  placeholder="Trip Name"
                  className="input input-bordered w-full"
                  value={formData.tripName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Friend's Name</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="friendName"
                    placeholder="Friend's Name"
                    className="input input-bordered w-full"
                    value={formData.friendName}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={handleAddFriend}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2">
                  {friends.map((friend, index) => (
                    <span key={index} className="badge badge-primary mr-2">
                      {friend}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="label">
                  <span className="label-text">Currency</span>
                </label>
                <select
                  name="currency"
                  className="select select-bordered w-full"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Currency
                  </option>
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.country} - {currency.symbol} ({currency.name})
                    </option>
                  ))}
                </select>
              </div>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Functionality;
