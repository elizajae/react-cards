import { useState, useEffect } from "react";
import axios from "axios";

export function useFlip(initialFlipState = false) {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const toggleFlip = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  };

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    const formattedResponse = formatter(response.data);
    setResponses((data) => [...data, formattedResponse]);
  };

  return [responses, addResponseData];
}

export default useAxios;
