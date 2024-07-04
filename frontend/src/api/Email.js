import axios from "axios";

const sendMail = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/msg", data);

    console.log(response);
    if (response.status === 200) {
      return response;
    } else {
      alert("SUBMISSION FAILED!");
    }
    return response;
  } catch (error) {
    alert("SUBMISSION FAILED!");
  }
};
export { sendMail };
