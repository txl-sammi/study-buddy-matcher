import * as api from "../api"

export const signUpUser = (signUpDetails, navigate) => async (dispatch) => {
    try {
        console.log(signUpDetails);
      const data  = await api.signUpUser(signUpDetails);
  
      dispatch({ type: "SIGNUP", data });
  
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  