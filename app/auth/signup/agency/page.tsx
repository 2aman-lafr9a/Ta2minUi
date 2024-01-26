"use client";

import "@/app/auth/style.css";
import "@/app/auth/pricing.css";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useState } from "react";
// import './pricing.css'
import { Agency } from "@/models/agency";
import { gql, useMutation } from "@apollo/client";
import Web3 from "web3";
const CREATE_AGENCY = gql`
  mutation createAgency($name: String!, $description: String!, $plan: String!) {
    createAgency(name: $name, description: $description, plan: $plan) {
      id
      name
      description
      plan
    }
  }
`;

const contractAddress = "0x53888f7e3002d93f24E44cF4aBfd0F591eF4b3D1";

const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "agence",
        type: "address",
      },
    ],
    name: "RightsAccepted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agence",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "acceptRights",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "agence",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "agences",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "subscription_type",
        type: "string",
      },
      {
        internalType: "bool",
        name: "rightsAccepted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_agenceAddress",
        type: "address",
      },
    ],
    name: "getAgenceInfoByAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const SignupAgencyForm = () => {
  //     // Define a variable to store the account address
  let account: any;
  //     // Define the contract instance
  let contract: any;
  let prix: Number;
  // execute the script web3 '

  // // Define a function to connect MetaMask
  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        account = accounts[0];
        console.log(account);
      } else {
        console.log("Please install Metamask or use a web3 browser");
      }
    } catch (error) {
      console.error(error);
      console.log("An error occurred while connecting Metamask");
    }
  };
  // // Define a function to connect the contract
  const connectContract = async () => {
    try {
      if (account) {
        window.web3 = new Web3(window.ethereum);
        contract = new window.web3.eth.Contract(contractABI, contractAddress);
        console.log("Connected to contract at address: " + contractAddress);
      } else {
        console.log("Please connect to MetaMask first");
      }
    } catch (error) {
      console.error(error);
      console.log("An error occurred while connecting to the contract");
    }
  };

  // // Define a function to accept rights
  const acceptRights = async (subscribtion_type: Number, name: string) => {
    try {
      if (account && contract) {
        switch (subscribtion_type) {
          case 1:
            prix = 0;
            break;
          case 2:
            prix = 0.3;
            break;
          case 3:
            prix = 0.5;
            break;
          default:
            prix = 0;
        }
        await contract.methods
          .acceptRights(account, name, subscribtion_type.toString())
          .send({
            from: account,
            value: window.web3.utils.toWei(prix.toString(), "ether"),
          });
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [agency, setAgency] = useState<Agency>({
    id: 0,
    companyName: "",
    userName: "",
    password: "",
    passwordConfirmation: "",
    companyDescription: "",
    subscription: 0,
  });

  const createAgencyHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(agency);
    const [createAgency] = useMutation(CREATE_AGENCY, {
      variables: {
        name: agency.companyName,
        description: agency.companyDescription,
        plan: agency.subscription,
      },
    });
    await createAgency();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgency({
      ...agency,
      [e.target.name]: e.target.value,
    });
  };

  const [step, setStep] = useState(1);

  const toStep2 = (e: FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to the next step
  };

  const handlePlans = async (plan: number) => {
    setAgency({
      ...agency,
      subscription: plan,
    });

    try {
      // await connectMetamask();
      // await connectContract();
      // await acceptRights(agency.subscription, agency.companyName); // Assuming acceptRights is an asynchronous function
      console.log("agency.subscription :");
      console.log(agency.subscription);
      // createAgencyHandler;
    } catch (error) {
      console.error(error);
      console.log("An error occurred during the process");
    }

    //  window.location.href = "/auth/signin"
  };

  return (
    <div
      className="singupAgency"
      style={{
        fontFamily: "sans-serif",
        fontWeight: "550",
        fontSize: "30px",
      }}
    >
      <div className="login-box ">
        {step === 1 && (
          <>
            <h2>SignUp</h2>
            <form onSubmit={toStep2}>
              {/* <div className="user-box">
  <input
    type="text"
    name="username"
    value={formData.username}
    onChange={handleChange}
    required
  />
  <label htmlFor="username">Username</label>
</div> */}

              <div className="user-box">
                <input
                  type="text"
                  name="companyName"
                  autoComplete="off"
                  value={agency.companyName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="companyName">Company Name</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="userName"
                  autoComplete="off"
                  value={agency.userName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="userName">Username</label>
              </div>

              <div className="password-container">
                <div className="user-box">
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    value={agency.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="user-box">
                  <input
                    type="password"
                    autoComplete="off"
                    name="passwordConfirmation"
                    value={agency.passwordConfirmation}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="passwordConfirmation">
                    Password Confirmation
                  </label>
                </div>
              </div>

              <div className="user-box agency">
                <input
                  type="text"
                  className="editable-content"
                  name="companyDescription"
                  value={agency.companyDescription}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                <label htmlFor="companyDescription"> Company Description</label>
              </div>
              <div className="buttun">
                <button type="submit">
                  <span />
                  <span />
                  <span />
                  <span />
                  Next &#8594;
                </button>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="login-box login-box-2">
            <form className="agency2">
              <div className="agency2">
                <div className="containerP">
                  <div className="cardP cardP-1">
                    <h2>Basic</h2>
                    <h3>FREE</h3>
                    <ul>
                      <li className="aval">1 offer</li>
                      <li className="aval">10 contract</li>
                    </ul>
                    <button
                      type="button"
                      className="select"
                      onClick={() => handlePlans(1)}
                    >
                      Choose this plan
                    </button>
                  </div>
                  <div className="cardP cardP-2">
                    <h2>Premium</h2>
                    <h3>
                      0.3ETH<span>/mo.</span>
                    </h3>
                    <ul>
                      <li className="aval">10 offer</li>
                      <li className="aval">100 contract</li>
                    </ul>
                    <button
                      type="button"
                      className="select"
                      onClick={() => handlePlans(2)}
                    >
                      Choose this plan
                    </button>
                  </div>
                  <div className="cardP cardP-3">
                    <h2>Gold</h2>
                    <h3>
                      0.5ETH<span>/mo.</span>
                    </h3>
                    <ul>
                      <li className="aval">+100 offer</li>
                      <li className="aval">+100000 contract</li>
                    </ul>
                    <div
                      className="buttun"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        type="button"
                        className="select"
                        onClick={() => handlePlans(3)}
                      >
                        Choose this plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="button">
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              submit &#8594 
            </button> 
           </div> */}
            </form>
          </div>
        )}

        {/* loader */}
        <div className="main-fader agency">
          <div className="loader">
            <svg viewBox="0 0 866 866" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="160%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "transparent" }} />
                  <stop offset="100%" style={{ stopColor: "#03e9f4" }} />
                </linearGradient>
              </defs>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 164.83 151.5"
              >
                <path
                  className="path-0"
                  d="M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z"
                  fill="url(#gradient)"
                />
                <path
                  className="path-1"
                  d="M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z"
                  fill="url(#gradient)"
                />
                <path
                  className="path-2"
                  d="M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z"
                  fill="url(#gradient)"
                />
                <path
                  className="path-3"
                  d="M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z"
                  fill="url(#gradient)"
                />
                <path
                  className="path-4"
                  d="M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z"
                  fill="url(#gradient)"
                />
                <path
                  className="path-5"
                  fill="url(#gradient)"
                  d="M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z"
                />
                <path
                  className="path-6"
                  fill="url(#gradient)"
                  d="M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"
                />
                <path
                  className="path-7"
                  fill="url(#gradient)"
                  d="M66.28,132.51c13.36,3.78,25.62,3.5,38-.90C91.68,129.59,79.36,128,66.28,132.51Z"
                />
                <path
                  className="path-8"
                  fill="url(#gradient)"
                  d="M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z"
                />
                <path
                  className="bb-9"
                  fill="url(#gradient)"
                  d="M117.35,125c5.58-2.32,16.9-13.84,18.10-19.20-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z"
                />
              </svg>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupAgencyForm;
