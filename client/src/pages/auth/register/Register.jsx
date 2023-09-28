import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //create your state here there are two things you need 1. the name of the state 2. the name of the set part of the state. So if you want to create a state for house now: const [house, setHouse] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const navigation = useNavigate();

  //This is the function that sends the signup data to the backend
  const submitRegister = async (event) => {
    event.preventDefault();
    if (password === password_confirmation) {
      const passwordRegex =
        /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;

      if (!passwordRegex.test(password)) {
        toast.error(
          "Password does not meet requirements. please include an upper case letter, a number and a symbol"
        );
        return;
      }
      try {
        const response = await fetch("http://localhost:5001/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            password,
          }),
        });

        if (response.status === 201) {
          navigation("/login");
          // Registration successful, you can redirect or show a success message.
          const data = await response.json();
          console.log("Registration successful:", data);
          // Clear the form fields
          setEmail("");
          setFirstName("");
          setLastName("");
          setPassword("");
          setPhone("");
          setPasswordConfirmation("");
        } else {
          // Handle registration error here, e.g., by showing an error message to the user.
          const errorData = await response.json();
          console.error("Registration error:", errorData.message);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Password does not match");
    }
  };

  return (
    <div className="w-full text-left p-0">
      <div className="bgOne">
        {/* <img className="absolute top-0 right-0 z-[-1]" src={Left} alt="" /> */}

        <div className="flex justify-between items-center mx-16">
          <div>
            <div className="text-[58px] mb-[33px] font-[700]">
              Join us today <br /> and get your books <br /> published without
              hassle
            </div>
            <div className="text-[20px] text-justify">
              Are you or a colleague struggling to get their <br /> books
              published to reach the desired audience? <br /> Look no further –
              Warebooks is here to <br /> help, and direct you to your readers.
            </div>
          </div>
        </div>
        <div className="bgTwo">
          <div className="w-[80%] m-auto text-[72px] font-[700] mb-5">
            Sign Up
          </div>
          <div className="w-[80%] m-auto text-[36px] font-[700] mb-5 ">
            Please Sign Up To Continue
          </div>

          <form onSubmit={submitRegister}>
            <div className=" w-[80%] grid grid-cols-2 gap-10 m-auto">
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                placeholder="First Name"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                placeholder="Last Name"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="tel"
                minLength={11}
                maxLength={11}
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                placeholder="i.e 08030000001"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="i.e you@email.com"
              />

              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Enter Password"
              />
              <input
                className="bg-[#fff] border border-[#9e9e9e] p-[5px] rounded-[8px]"
                type="password"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(event) => {
                  setPasswordConfirmation(event.target.value);
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-[#5AB9EB] w-[400px] h-[45px] m-auto mt-[38px] rounded-[15px] text-[#fff] shadow-[2px_5px_4px_0px_rgba(199,199,199,0.25)]"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
