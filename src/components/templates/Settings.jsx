import { useEffect, useState } from "react";
import CreditCard from "../molecules/CreditCard/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../store/currentUserSlice";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfileImg from "../atoms/ProfileImg/ProfileImg";
import { Col, Form } from "react-bootstrap";
import Button from "../atoms/Button/Button";
import { useToast } from "../../context/ToastProvider";
const Settings = () => {
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const { currentUser } = useSelector((state) => state.currentUser);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch(
        updateCurrentUser({
          name,
          username,
          email,
          password,
          dob,
          presentAddress,
          permanentAddress,
          city,
          postal,
          country,
        })
      );
      showToast("Profile updated!");
    }
    setValidated(true);
  };

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setUsername(currentUser.username);
      setEmail(currentUser.email);
      setPassword(currentUser.password);
      setDob(currentUser.dob);
      setPresentAddress(currentUser.presentAddress);
      setPermanentAddress(currentUser.permanentAddress);
      setCity(currentUser.city);
      setPostal(currentUser.postal);
      setCountry(currentUser.country);
    }
  }, [currentUser]);
  return (
    <>
      <div className="bg-white rounded-[25px] px-[20px] py-[22px] lg:px-[30px] lg:py-[30px] mt-[25px] lg:mt-0">
        <Tabs
          defaultActiveKey="profile"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 font-inter font-medium flex justify-between w-full lg:justify-start"
        >
          <Tab eventKey="profile" title="Edit Profile">
            <div className="lg:pl-[20px] pt-[45px] lg:pl-[30px] lg:pt-[40px] flex flex-col items-center lg:items-start lg:flex-row gap-[22px] lg:gap-[57px]">
              <ProfileImg
                canUpload={true}
                className={"w-[100px] h-[100px] lg:w-[91px] lg:h-[91px]"}
              ></ProfileImg>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="w-full"
              >
                <div className="flex flex-col gap-[16px] lg:gap-[22px] flex-1 w-full">
                  <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px]">
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formName">
                        <Form.Label className="font-inter font-normal">
                          Your Name
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setName(e.target.value)}
                          required
                          type="text"
                          value={name}
                          className="text-sm"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter your name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formUsername">
                        <Form.Label className="font-inter font-normal">
                          User Name
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          type="text"
                          value={username}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter user name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px]">
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formEmail">
                        <Form.Label className="font-inter font-normal">
                          Email
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          type="email"
                          value={email}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please valid enter email
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formPassword">
                        <Form.Label className="font-inter font-normal">
                          Password
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          type="password"
                          value={password}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter password
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px]">
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formDate">
                        <Form.Label className="font-inter font-normal">
                          Date of Birth
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setDob(e.target.value)}
                          required
                          type="text"
                          value={dob}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter date
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group
                        className="flex-1"
                        controlId="formPresentAddress"
                      >
                        <Form.Label className="font-inter font-normal">
                          Present Address
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setPresentAddress(e.target.value)}
                          required
                          type="text"
                          value={presentAddress}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter address
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px]">
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group
                        className="flex-1"
                        controlId="formPermanentAddress"
                      >
                        <Form.Label className="font-inter font-normal">
                          Permanent Address
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          required
                          type="text"
                          value={permanentAddress}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter address
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formCity">
                        <Form.Label className="font-inter font-normal">
                          City
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setCity(e.target.value)}
                          required
                          type="text"
                          value={city}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter city
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[22px]">
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formPostal">
                        <Form.Label className="font-inter font-normal">
                          Postal Address
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setPostal(e.target.value)}
                          required
                          type="text"
                          value={postal}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter postal address
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="flex flex-col gap-[16px] lg:gap-[29px] lg:flex-row flex-1">
                      <Form.Group className="flex-1" controlId="formCountry">
                        <Form.Label className="font-inter font-normal">
                          Country
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setCountry(e.target.value)}
                          required
                          type="text"
                          value={country}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter country
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-[16px] lg:mt-[40px]">
                  <Button
                    className={
                      "w-full lg:w-[190px] h-[40px] lg:h-[40px] rounded-[15px]"
                    }
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="preference" title="Preferences" disabled>
            Tab content for Profile
          </Tab>
          <Tab eventKey="security" title="Security" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Settings;
