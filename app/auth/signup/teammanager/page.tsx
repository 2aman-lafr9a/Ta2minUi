"use client";
import "@/app/auth/style.css";
import {Checkbox} from "@nextui-org/react";
import TableTail from "@/components/teams/teamsTable";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { TeamManager } from "@/models/teammanager";
import { gql, useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const CREATE_TEAM_MANAGER = gql`
  mutation createTeamManager($name: String!, $surname: String!, $age: Int!, $team: ID!) {
    createTeamManager(name: $name, surname: $surname, age: $age, team: $team) {
        id
        name
        surname
        age
        team
    }
  }
`;


const TeamManagerSignup = () => {
  //     // Define a variable to store the account address
  //     let account;
  //     // Define the contract instance
  //     let contract;
  // // Define a function to connect MetaMask
  //     const connectMetamask = async () => {
  //   try {
  //       if (window.ethereum) {
  //           const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  //           account = accounts[0];
  //           console.log(account);

  //       } else {
  //         console.log("Please install Metamask or use a web3 browser");
  //             }
  //   } catch (error) {
  //       console.error(error);
  //       console.log("An error occurred while connecting Metamask");
  //  }
  //     }
  // // Define a function to connect the contract
  // const connectContract = async () => {
  //   try {
  //       if (account) {
  //           window.web3 = new Web3(window.ethereum);
  //           contract = new window.web3.eth.Contract(contractABI, contractAddress);
  //            console.log("Connected to contract at address: " + contractAddress);
  //       } else {
  //            console.log("Please connect to MetaMask first");
  //       }
  //   } catch (error) {
  //       console.error(error);
  //       console.log("An error occurred while connecting to the contract");
  //   }
  // }

  // // Define a function to accept rights
  // const acceptRights = async () => {
  //   try {
  //       if (account && contract) {
  //           name = "HADDAD MOHAMMED";
  //           await contract.methods.acceptRights(account,name).send({ from: account , value: window.web3.utils.toWei("0.00001", "ether")});
  //            console.log("Rights accepted successfully");
  //       } else {
  //            console.log("Please connect to MetaMask and the contract first");
  //       }
  //   } catch (error) {
  //       console.error(error);
  // console.log("An error occurred while accepting rights");
  //   }
  // }

  // declare the team manager variable and set to teamManeger interface

  // declare the formData variable and set to formData interface

  
  function parentFn(childData: any) {
    //verify if the childData is the team object
    if (childData) {
      // ///child data the team object that have the teamName and teamId
      setIsTeamSelected(true);      
      setTeamManager({
        ...teamManager,
        teamName: childData.name,
        teamId: childData.id,
      });
    } 
    console.log("childData");
    console.log(teamManager);
  }
  const [step, setStep] = useState(1);
  const [isTeamSelected , setIsTeamSelected] = useState(false); // Use 'value' instead of 'defaultValue'
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [teamManager, setTeamManager] = useState<TeamManager>({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    phoneNumber: "",
    age: 20,
    gender: "",
    teamName: "",
    teamId: 0,
  });

  const [createTeamManager, { data }] = useMutation(CREATE_TEAM_MANAGER);

  const createTeamManagerHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log(teamManager);
    try {
      const { data } = await createTeamManager({
        variables: {
          name: teamManager.firstName,
          surname: teamManager.lastName,
          age: teamManager.age,
          team: teamManager.teamId,
        },
      });
      console.log(data);
      toast.success("Team manager created successfully");
    } catch (error) {
      toast.error("An error occurred while creating the team manager");
    }
  
  }


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTeamManager({
      ...teamManager,
      [e.target.name]: e.target.value,
    });
  };

  const toStep2 = (e: FormEvent) => {
    e.preventDefault();
    console.log(teamManager);
    setStep(2); // Move to the next step
  };

  const toStep1 = (e: FormEvent) => {
    e.preventDefault();
    createTeamManagerHandler(e).then(r => console.log(r));
    setStep(1); // Move to the next step
  };

  return (
    <div
      className={
        step === 1
          ? "login-box teamManager"
          : "login-box teamManager login-box-3"
      }
      style={{
        fontFamily: "sans-serif",
        fontWeight: "550",
        fontSize: "30px",
      }}
    >
      {step === 1 && (
        <form onSubmit={toStep2}>
          <h2>Registration</h2>
          <div className="password-container">
            <div className="user-box">
              <input
                type="text"
                name="firstName"
                value={teamManager.firstName}
                onChange={handleChange}
                autoComplete="nope" // Use a unique string
                required
              />

              <label htmlFor="fname">first Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="lastName"
                autoComplete="nope" // Use a unique string
                onChange={handleChange}
                value={teamManager.lastName}
                required
              />
              <label htmlFor="lname">Last Name</label>
            </div>
          </div>

          <div className="password-container">
            <div className="user-box">
              <input
                type="tel"
                name="phoneNumber"
                autoComplete="off" // Use a unique string
                onChange={handleChange}
                value={teamManager.phoneNumber}
                required
              />
              <label htmlFor="phone">phone</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                autoComplete="nope" // Use a unique string
                onChange={handleChange}
                value={teamManager.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="password-container">
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={teamManager.password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                value={teamManager.passwordConfirmation}
                required
              />
              <label htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
            </div>
          </div>
          <div className="user-info-container">
            <div className="user-box">
              <div className="styled-select-wrapper">
                <select
                  name="gender"
                  className="styled-select"
                  value={teamManager.gender} // Use 'value' instead of 'defaultValue'
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select Gender
                  </option>
                  <option
                    value="male"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Male
                  </option>
                  <option
                    value="female"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Female
                  </option>
                </select>
              </div>
            </div>

            <div
              className="user-box"
              style={{
                width: "21%",
              }}
            >
              <input
                type="number"
                name="age"
                min={20}
                onChange={handleChange}
                value={teamManager.age}
                required
              />
              <label htmlFor="age">Age</label>
            </div>
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
      )}

      {step === 2 && (
        <div>
          <TableTail parentFn={parentFn} />


          {isTeamSelected && (

          <div>
            <form onSubmit={toStep1}>
              {/* Checkbox for accepting terms */}

              <Checkbox isRequired color="danger" className="pl-10">
              <span className="w-[30%] text-small text-default-400 m-3">
                  Accept Terms and Conditions
                </span>                
                </Checkbox>
              
              <div className="buttun" style={{
                marginTop: "-30px",    
              }}>
                <button type="submit">
                  <span />
                  <span />
                  <span />
                  <span />
                  Next &#8594;
                </button>
              </div>
            </form>
          </div>
          )}
        </div>

      )}
       
        <div className="main-fader">
          <div className="loader">
            <svg viewBox="0 0 866 866" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="170%" y2="0%">
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
  );
};

export default TeamManagerSignup;
