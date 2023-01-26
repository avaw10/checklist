import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import rentStyles from "../Styles/rent.module.css";

function Rent() {
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const url = "http://localhost:4001/rent";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log("rent data", data);
    setMonthOf(data.month);
    setRoommateOneName(data.roommateOneName);
    setRoommateOneRent(data.roommateOneRent);
    setRoommateOneWater(data.roommateOneWater);
    setRoommateOneElectricity(data.roommateOneElectricity);
    setRoommateOneGas(data.roommateOneGas);
    setRoommateOneInternet(data.roommateOneInternet);
    setRoommateOneTrash(data.roommateOneTrash);
    setRoommateTwoName(data.roommateTwoName);
    setRoommateTwoRent(data.roommateTwoRent);
    setRoommateTwoWater(data.roommateTwoWater);
    setRoommateTwoElectricity(data.roommateTwoElectricity);
    setRoommateTwoGas(data.roommateTwoGas);
    setRoommateTwoInternet(data.roommateTwoInternet);
    setRoommateTwoTrash(data.roommateTwoTrash);
    setRoommateThreeName(data.roommateThreeName);
    setRoommateThreeRent(data.roommateThreeRent);
    setRoommateThreeWater(data.roommateThreeWater);
    setRoommateThreeElectricity(data.roommateThreeElectricity);
    setRoommateThreeGas(data.roommateThreeGas);
    setRoommateThreeInternet(data.roommateThreeInternet);
    setRoommateThreeTrash(data.roommateThreeTrash);
    setRoommateFourName(data.roommateFourName);
    setRoommateFourRent(data.roommateFourRent);
    setRoommateFourWater(data.roommateFourWater);
    setRoommateFourElectricity(data.roommateFourElectricity);
    setRoommateFourGas(data.roommateFourGas);
    setRoommateFourInternet(data.roommateFourInternet);
    setRoommateFourTrash(data.roommateFourTrash);
    setRoommateFiveName(data.roommateFiveName);
    setRoommateFiveRent(data.roommateFiveRent);
    setRoommateFiveWater(data.roommateFiveWater);
    setRoommateFiveElectricity(data.roommateFiveElectricity);
    setRoommateFiveGas(data.roommateFiveGas);
    setRoommateFiveInternet(data.roommateFiveInternet);
    setRoommateFiveTrash(data.roommateFiveTrash);
    setRoommateSixName(data.roommateSixName);
    setRoommateSixRent(data.roommateSixRent);
    setRoommateSixWater(data.roommateSixWater);
    setRoommateSixElectricity(data.roommateSixElectricity);
    setRoommateSixGas(data.roommateSixGas);
    setRoommateSixInternet(data.roommateSixInternet);
    setRoommateSixTrash(data.roommateSixTrash);
    setRoommateSevenName(data.roommateSevenName);
    setRoommateSevenRent(data.roommateSevenRent);
    setRoommateSevenWater(data.roommateSevenWater);
    setRoommateSevenElectricity(data.roommateSevenElectricity);
    setRoommateSevenGas(data.roommateSevenGas);
    setRoommateSevenInternet(data.roommateSevenInternet);
    setRoommateSevenTrash(data.roommateSevenTrash);
    setRoommateEightName(data.roommateEightName);
    setRoommateEightRent(data.roommateEightRent);
    setRoommateEightWater(data.roommateEightWater);
    setRoommateEightElectricity(data.roommateEightElectricity);
    setRoommateEightGas(data.roommateEightGas);
    setRoommateEightInternet(data.roommateEightInternet);
    setRoommateEightTrash(data.roommateEightTrash);
    setRoommateNineName(data.roommateNineName);
    setRoommateNineRent(data.roommateNineRent);
    setRoommateNineWater(data.roommateNineWater);
    setRoommateNineElectricity(data.roommateNineElectricity);
    setRoommateNineGas(data.roommateNineGas);
    setRoommateNineInternet(data.roommateNineInternet);
    setRoommateNineTrash(data.roommateNineTrash);
    setRoommateTenName(data.roommateTenName);
    setRoommateTenRent(data.roommateTenRent);
    setRoommateTenWater(data.roommateTenWater);
    setRoommateTenElectricity(data.roommateTenElectricity);
    setRoommateTenGas(data.roommateTenGas);
    setRoommateTenInternet(data.roommateTenInternet);
    setRoommateTenTrash(data.roommateTenTrash);
    setRoommateElevenName(data.roommateElevenName);
    setRoommateElevenRent(data.roommateElevenRent);
    setRoommateElevenWater(data.roommateElevenWater);
    setRoommateElevenElectricity(data.roommateElevenElectricity);
    setRoommateElevenGas(data.roommateElevenGas);
    setRoommateElevenInternet(data.roommateElevenInternet);
    setRoommateElevenTrash(data.roommateElevenTrash);
    console.log(data);
  };

  const [monthOf, setMonthOf] = useState("");
  const [roommateOneName, setRoommateOneName] = useState("");
  const [roommateOneRent, setRoommateOneRent] = useState("");
  const [roommateOneWater, setRoommateOneWater] = useState("");
  const [roommateOneElectricity, setRoommateOneElectricity] = useState("");
  const [roommateOneGas, setRoommateOneGas] = useState("");
  const [roommateOneInternet, setRoommateOneInternet] = useState("");
  const [roommateOneTrash, setRoommateOneTrash] = useState("");
  const roommateOneNameChange = (e) => {
    console.log(e.target.value);
    setRoommateOneName(e.target.value);
  };
  const roommateOneRentChange = (e) => {
    console.log(e.target.value);
    setRoommateOneRent(e.target.value);
  };
  const roommateOneWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateOneWater(e.target.value);
  };
  const roommateOneElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateOneElectricity(e.target.value);
  };
  const roommateOneGasChange = (e) => {
    console.log(e.target.value);
    setRoommateOneGas(e.target.value);
  };
  const roommateOneInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateOneInternet(e.target.value);
  };
  const roommateOneTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateOneTrash(e.target.value);
  };

  const [roommateTwoName, setRoommateTwoName] = useState("");
  const [roommateTwoRent, setRoommateTwoRent] = useState("");
  const [roommateTwoWater, setRoommateTwoWater] = useState("");
  const [roommateTwoElectricity, setRoommateTwoElectricity] = useState("");
  const [roommateTwoGas, setRoommateTwoGas] = useState("");
  const [roommateTwoInternet, setRoommateTwoInternet] = useState("");
  const [roommateTwoTrash, setRoommateTwoTrash] = useState("");
  const roommateTwoNameChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoName(e.target.value);
  };
  const roommateTwoRentChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoRent(e.target.value);
  };
  const roommateTwoWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoWater(e.target.value);
  };
  const roommateTwoElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoElectricity(e.target.value);
  };
  const roommateTwoGasChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoGas(e.target.value);
  };
  const roommateTwoInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoInternet(e.target.value);
  };
  const roommateTwoTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateTwoTrash(e.target.value);
  };

  const [roommateThreeName, setRoommateThreeName] = useState("");
  const [roommateThreeRent, setRoommateThreeRent] = useState("");
  const [roommateThreeWater, setRoommateThreeWater] = useState("");
  const [roommateThreeElectricity, setRoommateThreeElectricity] = useState("");
  const [roommateThreeGas, setRoommateThreeGas] = useState("");
  const [roommateThreeInternet, setRoommateThreeInternet] = useState("");
  const [roommateThreeTrash, setRoommateThreeTrash] = useState("");
  const roommateThreeNameChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeName(e.target.value);
  };
  const roommateThreeRentChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeRent(e.target.value);
  };
  const roommateThreeWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeWater(e.target.value);
  };
  const roommateThreeElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeElectricity(e.target.value);
  };
  const roommateThreeGasChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeGas(e.target.value);
  };
  const roommateThreeInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeInternet(e.target.value);
  };
  const roommateThreeTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateThreeTrash(e.target.value);
  };

  const [roommateFourName, setRoommateFourName] = useState("");
  const [roommateFourRent, setRoommateFourRent] = useState("");
  const [roommateFourWater, setRoommateFourWater] = useState("");
  const [roommateFourElectricity, setRoommateFourElectricity] = useState("");
  const [roommateFourGas, setRoommateFourGas] = useState("");
  const [roommateFourInternet, setRoommateFourInternet] = useState("");
  const [roommateFourTrash, setRoommateFourTrash] = useState("");
  const roommateFourNameChange = (e) => {
    console.log(e.target.value);
    setRoommateFourName(e.target.value);
  };
  const roommateFourRentChange = (e) => {
    console.log(e.target.value);
    setRoommateFourRent(e.target.value);
  };
  const roommateFourWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateFourWater(e.target.value);
  };
  const roommateFourElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateFourElectricity(e.target.value);
  };
  const roommateFourGasChange = (e) => {
    console.log(e.target.value);
    setRoommateFourGas(e.target.value);
  };
  const roommateFourInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateFourInternet(e.target.value);
  };
  const roommateFourTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateFourTrash(e.target.value);
  };

  const [roommateFiveName, setRoommateFiveName] = useState("");
  const [roommateFiveRent, setRoommateFiveRent] = useState("");
  const [roommateFiveWater, setRoommateFiveWater] = useState("");
  const [roommateFiveElectricity, setRoommateFiveElectricity] = useState("");
  const [roommateFiveGas, setRoommateFiveGas] = useState("");
  const [roommateFiveInternet, setRoommateFiveInternet] = useState("");
  const [roommateFiveTrash, setRoommateFiveTrash] = useState("");
  const roommateFiveNameChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveName(e.target.value);
  };
  const roommateFiveRentChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveRent(e.target.value);
  };
  const roommateFiveWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveWater(e.target.value);
  };
  const roommateFiveElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveElectricity(e.target.value);
  };
  const roommateFiveGasChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveGas(e.target.value);
  };
  const roommateFiveInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveInternet(e.target.value);
  };
  const roommateFiveTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateFiveTrash(e.target.value);
  };

  const [roommateSixName, setRoommateSixName] = useState("");
  const [roommateSixRent, setRoommateSixRent] = useState("");
  const [roommateSixWater, setRoommateSixWater] = useState("");
  const [roommateSixElectricity, setRoommateSixElectricity] = useState("");
  const [roommateSixGas, setRoommateSixGas] = useState("");
  const [roommateSixInternet, setRoommateSixInternet] = useState("");
  const [roommateSixTrash, setRoommateSixTrash] = useState("");
  const roommateSixNameChange = (e) => {
    console.log(e.target.value);
    setRoommateSixName(e.target.value);
  };
  const roommateSixRentChange = (e) => {
    console.log(e.target.value);
    setRoommateSixRent(e.target.value);
  };
  const roommateSixWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateSixWater(e.target.value);
  };
  const roommateSixElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateSixElectricity(e.target.value);
  };
  const roommateSixGasChange = (e) => {
    console.log(e.target.value);
    setRoommateSixGas(e.target.value);
  };
  const roommateSixInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateSixInternet(e.target.value);
  };
  const roommateSixTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateSixTrash(e.target.value);
  };

  const [roommateSevenName, setRoommateSevenName] = useState("");
  const [roommateSevenRent, setRoommateSevenRent] = useState("");
  const [roommateSevenWater, setRoommateSevenWater] = useState("");
  const [roommateSevenElectricity, setRoommateSevenElectricity] = useState("");
  const [roommateSevenGas, setRoommateSevenGas] = useState("");
  const [roommateSevenInternet, setRoommateSevenInternet] = useState("");
  const [roommateSevenTrash, setRoommateSevenTrash] = useState("");
  const roommateSevenNameChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenName(e.target.value);
  };
  const roommateSevenRentChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenRent(e.target.value);
  };
  const roommateSevenWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenWater(e.target.value);
  };
  const roommateSevenElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenElectricity(e.target.value);
  };
  const roommateSevenGasChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenGas(e.target.value);
  };
  const roommateSevenInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenInternet(e.target.value);
  };
  const roommateSevenTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateSevenTrash(e.target.value);
  };

  const [roommateEightName, setRoommateEightName] = useState("");
  const [roommateEightRent, setRoommateEightRent] = useState("");
  const [roommateEightWater, setRoommateEightWater] = useState("");
  const [roommateEightElectricity, setRoommateEightElectricity] = useState("");
  const [roommateEightGas, setRoommateEightGas] = useState("");
  const [roommateEightInternet, setRoommateEightInternet] = useState("");
  const [roommateEightTrash, setRoommateEightTrash] = useState("");
  const roommateEightNameChange = (e) => {
    console.log(e.target.value);
    setRoommateEightName(e.target.value);
  };
  const roommateEightRentChange = (e) => {
    console.log(e.target.value);
    setRoommateEightRent(e.target.value);
  };
  const roommateEightWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateEightWater(e.target.value);
  };
  const roommateEightElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateEightElectricity(e.target.value);
  };
  const roommateEightGasChange = (e) => {
    console.log(e.target.value);
    setRoommateEightGas(e.target.value);
  };
  const roommateEightInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateEightInternet(e.target.value);
  };
  const roommateEightTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateEightTrash(e.target.value);
  };

  const [roommateNineName, setRoommateNineName] = useState("");
  const [roommateNineRent, setRoommateNineRent] = useState("");
  const [roommateNineWater, setRoommateNineWater] = useState("");
  const [roommateNineElectricity, setRoommateNineElectricity] = useState("");
  const [roommateNineGas, setRoommateNineGas] = useState("");
  const [roommateNineInternet, setRoommateNineInternet] = useState("");
  const [roommateNineTrash, setRoommateNineTrash] = useState("");
  const roommateNineNameChange = (e) => {
    console.log(e.target.value);
    setRoommateNineName(e.target.value);
  };
  const roommateNineRentChange = (e) => {
    console.log(e.target.value);
    setRoommateNineRent(e.target.value);
  };
  const roommateNineWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateNineWater(e.target.value);
  };
  const roommateNineElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateNineElectricity(e.target.value);
  };
  const roommateNineGasChange = (e) => {
    console.log(e.target.value);
    setRoommateNineGas(e.target.value);
  };
  const roommateNineInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateNineInternet(e.target.value);
  };
  const roommateNineTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateNineTrash(e.target.value);
  };

  const [roommateTenName, setRoommateTenName] = useState("");
  const [roommateTenRent, setRoommateTenRent] = useState("");
  const [roommateTenWater, setRoommateTenWater] = useState("");
  const [roommateTenElectricity, setRoommateTenElectricity] = useState("");
  const [roommateTenGas, setRoommateTenGas] = useState("");
  const [roommateTenInternet, setRoommateTenInternet] = useState("");
  const [roommateTenTrash, setRoommateTenTrash] = useState("");
  const roommateTenNameChange = (e) => {
    console.log(e.target.value);
    setRoommateTenName(e.target.value);
  };
  const roommateTenRentChange = (e) => {
    console.log(e.target.value);
    setRoommateTenRent(e.target.value);
  };
  const roommateTenWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateTenWater(e.target.value);
  };
  const roommateTenElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateTenElectricity(e.target.value);
  };
  const roommateTenGasChange = (e) => {
    console.log(e.target.value);
    setRoommateTenGas(e.target.value);
  };
  const roommateTenInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateTenInternet(e.target.value);
  };
  const roommateTenTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateTenTrash(e.target.value);
  };

  const [roommateElevenName, setRoommateElevenName] = useState("");
  const [roommateElevenRent, setRoommateElevenRent] = useState("");
  const [roommateElevenWater, setRoommateElevenWater] = useState("");
  const [roommateElevenElectricity, setRoommateElevenElectricity] =
    useState("");
  const [roommateElevenGas, setRoommateElevenGas] = useState("");
  const [roommateElevenInternet, setRoommateElevenInternet] = useState("");
  const [roommateElevenTrash, setRoommateElevenTrash] = useState("");
  const roommateElevenNameChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenName(e.target.value);
  };
  const roommateElevenRentChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenRent(e.target.value);
  };
  const roommateElevenWaterChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenWater(e.target.value);
  };
  const roommateElevenElectricityChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenElectricity(e.target.value);
  };
  const roommateElevenGasChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenGas(e.target.value);
  };
  const roommateElevenInternetChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenInternet(e.target.value);
  };
  const roommateElevenTrashChange = (e) => {
    console.log(e.target.value);
    setRoommateElevenTrash(e.target.value);
  };

  const submitData = async () => {
    const data = {
      month: monthOf,
      roommateOneName: roommateOneName,
      roommateOneRent: roommateOneRent,
      roommateOneWater: roommateOneWater,
      roommateOneElectrcity: roommateOneElectricity,
      roommateOneGas: roommateOneGas,
      roommateOneInternet: roommateOneInternet,
      roommateOneTrash: roommateOneTrash,
      roommateTwoName: roommateTwoName,
      roommateTwoRent: roommateTwoRent,
      roommateTwoWater: roommateTwoWater,
      roommateTwoElectrcity: roommateTwoElectricity,
      roommateTwoGas: roommateTwoGas,
      roommateTwoInternet: roommateTwoInternet,
      roommateTwoTrash: roommateTwoTrash,
      roommateThreeName: roommateThreeName,
      roommateThreeRent: roommateThreeRent,
      roommateThreeWater: roommateThreeWater,
      roommateThreeElectrcity: roommateThreeElectricity,
      roommateThreeGas: roommateThreeGas,
      roommateThreeInternet: roommateThreeInternet,
      roommateThreeTrash: roommateThreeTrash,
      roommateFourName: roommateFourName,
      roommateFourRent: roommateFourRent,
      roommateFourWater: roommateFourWater,
      roommateFourElectrcity: roommateFourElectricity,
      roommateFourGas: roommateFourGas,
      roommateFourInternet: roommateFourInternet,
      roommateFourTrash: roommateFourTrash,
      roommateFiveName: roommateFiveName,
      roommateFiveRent: roommateFiveRent,
      roommateFiveWater: roommateFiveWater,
      roommateFiveElectrcity: roommateFiveElectricity,
      roommateFiveGas: roommateFiveGas,
      roommateFiveInternet: roommateFiveInternet,
      roommateFiveTrash: roommateFiveTrash,
      roommateSixName: roommateSixName,
      roommateSixRent: roommateSixRent,
      roommateSixWater: roommateSixWater,
      roommateSixElectrcity: roommateSixElectricity,
      roommateSixGas: roommateSixGas,
      roommateSixInternet: roommateSixInternet,
      roommateSixTrash: roommateSixTrash,
      roommateSevenName: roommateSevenName,
      roommateSevenRent: roommateSevenRent,
      roommateSevenWater: roommateSevenWater,
      roommateSevenElectrcity: roommateSevenElectricity,
      roommateSevenGas: roommateSevenGas,
      roommateSevenInternet: roommateSevenInternet,
      roommateSevenTrash: roommateSevenTrash,
      roommateEightName: roommateEightName,
      roommateEightRent: roommateEightRent,
      roommateEightWater: roommateEightWater,
      roommateEightElectrcity: roommateEightElectricity,
      roommateEightGas: roommateEightGas,
      roommateEightInternet: roommateEightInternet,
      roommateEightTrash: roommateEightTrash,
      roommateNineName: roommateNineName,
      roommateNineRent: roommateNineRent,
      roommateNineWater: roommateNineWater,
      roommateNineElectrcity: roommateNineElectricity,
      roommateNineGas: roommateNineGas,
      roommateNineInternet: roommateNineInternet,
      roommateNineTrash: roommateNineTrash,
      roommateTenName: roommateTenName,
      roommateTenRent: roommateTenRent,
      roommateTenWater: roommateTenWater,
      roommateTenElectrcity: roommateTenElectricity,
      roommateTenGas: roommateTenGas,
      roommateTenInternet: roommateTenInternet,
      roommateTenTrash: roommateTenTrash,
      roommateElevenName: roommateElevenName,
      roommateElevenRent: roommateElevenRent,
      roommateElevenWater: roommateElevenWater,
      roommateElevenElectrcity: roommateElevenElectricity,
      roommateElevenGas: roommateElevenGas,
      roommateElevenInternet: roommateElevenInternet,
      roommateElevenTrash: roommateElevenTrash,
    };

    console.log("Submit", data);
    const url = "http://localhost:4001/rent";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const resp = await response.json();
    alert(resp.message);
    console.log("RESP", resp);
  };
  return (
    <Layout isLoggedIn={true}>
      <div className={rentStyles.container}>
        <div className={rentStyles.intro}>
          <div className={rentStyles.top}>
            <h63>Monthly Payments!</h63>
            <div className={rentStyles.under}>
              <h64>Check to See What Bills You've Paid This Month!</h64>
              <div className={rentStyles.month}>
                <h41> Month: {monthOf} </h41>
                <div className={rentStyles.rent}>
                  <table>
                    <tr>
                      <th>Roommate</th>
                      <th>Rent</th>
                      <th>Water</th>
                      <th>Electricity</th>
                      <th>Gas</th>
                      <th>Internet</th>
                      <th>Trash</th>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneName}
                          onChange={roommateOneNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneRent}
                          onChange={roommateOneRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneWater}
                          onChange={roommateOneWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneElectricity}
                          onChange={roommateOneElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneGas}
                          onChange={roommateOneGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneInternet}
                          onChange={roommateOneInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateOneTrash}
                          onChange={roommateOneTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoName}
                          onChange={roommateTwoNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoRent}
                          onChange={roommateTwoRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoWater}
                          onChange={roommateTwoWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoElectricity}
                          onChange={roommateTwoElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoGas}
                          onChange={roommateTwoGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoInternet}
                          onChange={roommateTwoInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTwoTrash}
                          onChange={roommateTwoTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeName}
                          onChange={roommateThreeNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeRent}
                          onChange={roommateThreeRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeWater}
                          onChange={roommateThreeWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeElectricity}
                          onChange={roommateThreeElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeGas}
                          onChange={roommateThreeGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeInternet}
                          onChange={roommateThreeInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateThreeTrash}
                          onChange={roommateThreeTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourName}
                          onChange={roommateFourNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourRent}
                          onChange={roommateFourRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourWater}
                          onChange={roommateFourWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourElectricity}
                          onChange={roommateFourElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourGas}
                          onChange={roommateFourGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourInternet}
                          onChange={roommateFourInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFourTrash}
                          onChange={roommateFourTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveName}
                          onChange={roommateFiveNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveRent}
                          onChange={roommateFiveRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveWater}
                          onChange={roommateFiveWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveElectricity}
                          onChange={roommateFiveElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveGas}
                          onChange={roommateFiveGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveInternet}
                          onChange={roommateFiveInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateFiveTrash}
                          onChange={roommateFiveTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixName}
                          onChange={roommateSixNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixRent}
                          onChange={roommateSixRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixWater}
                          onChange={roommateSixWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixElectricity}
                          onChange={roommateSixElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixGas}
                          onChange={roommateSixGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixInternet}
                          onChange={roommateSixInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSixTrash}
                          onChange={roommateSixTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenName}
                          onChange={roommateSevenNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenRent}
                          onChange={roommateSevenRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenWater}
                          onChange={roommateSevenWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenElectricity}
                          onChange={roommateSevenElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenGas}
                          onChange={roommateSevenGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenInternet}
                          onChange={roommateSevenInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateSevenTrash}
                          onChange={roommateSevenTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightName}
                          onChange={roommateEightNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightRent}
                          onChange={roommateEightRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightWater}
                          onChange={roommateEightWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightElectricity}
                          onChange={roommateEightElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightGas}
                          onChange={roommateEightGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightInternet}
                          onChange={roommateEightInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateEightTrash}
                          onChange={roommateEightTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineName}
                          onChange={roommateNineNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineRent}
                          onChange={roommateNineRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineWater}
                          onChange={roommateNineWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineElectricity}
                          onChange={roommateNineElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineGas}
                          onChange={roommateNineGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineInternet}
                          onChange={roommateNineInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateNineTrash}
                          onChange={roommateNineTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenName}
                          onChange={roommateTenNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenRent}
                          onChange={roommateTenRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenWater}
                          onChange={roommateTenWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenElectricity}
                          onChange={roommateTenElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenGas}
                          onChange={roommateTenGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenInternet}
                          onChange={roommateTenInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateTenTrash}
                          onChange={roommateTenTrashChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenName}
                          onChange={roommateElevenNameChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenRent}
                          onChange={roommateElevenRentChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenWater}
                          onChange={roommateElevenWaterChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenElectricity}
                          onChange={roommateElevenElectricityChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenGas}
                          onChange={roommateElevenGasChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenInternet}
                          onChange={roommateElevenInternetChange}
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          value={roommateElevenTrash}
                          onChange={roommateElevenTrashChange}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <button className={rentStyles.subbutton} onClick={submitData}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rent;
