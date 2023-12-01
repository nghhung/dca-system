import { CRYPTO_QUANT_API } from "../utils/constants";
import axios from 'axios';
export async function signIn() {
  try {
    const res = await fetch(`${CRYPTO_QUANT_API}/v1/sign-in`, {
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        email: import.meta.env.VITE_CRYPTO_QUANT_EMAIL,
        password: import.meta.env.VITE_CRYPTO_QUANT_PASSWORD,
        // stayLoggedIn: false,
      }),
      headers: {
        "Authorization": "Basic Og==",
        "Content-Type": "application/json",
        // "Cookie": "__cf_bm=wZWRWx1aJlm9j2XfqGII9IfQDFa0GaNtRYlp9pAB22s-1701399085-0-AZGZCeIOnUChTQCncwxaRA8WRa3elzclMyKR5EnyH0UZD1n2V4RrAZarx6IKG8artHcN0QJooPtUw6re9eTWtkY="
        // "X-Requested-With": "XMLHttpRequest"

      },
      method: "POST",
    });
    console.log('res ', res)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  // let data = JSON.stringify({
  //   "email": "folderanh5@gmail.com",
  //   "password": "Hung0905495922"
  // });
  
  // let config = {
  //   withCredentials: true,
  //   method: 'post',
  //   maxBodyLength: Infinity,
  //   url: 'https://live-api.cryptoquant.com/api/v1/sign-in',
  //   headers: { 
  //     'Content-Type': 'application/json', 
  //     'Authorization': 'Basic Og==', 
  //     'Cookie': '__cf_bm=wZWRWx1aJlm9j2XfqGII9IfQDFa0GaNtRYlp9pAB22s-1701399085-0-AZGZCeIOnUChTQCncwxaRA8WRa3elzclMyKR5EnyH0UZD1n2V4RrAZarx6IKG8artHcN0QJooPtUw6re9eTWtkY='
  //   },
  //   data : data
  // };
  // console.log('responseresponseresponseresponseresponseresponse')
  // await axios.request(config)
  // .then((response) => {
  //   console.log('JSON.stringify(response.data)', JSON.stringify(response));
  //   const data = JSON.stringify(response);
  //   return data
  // })
  // .catch((error) => {
  //   console.log('error _ 1')
  //   console.log(error);
  // });
}
