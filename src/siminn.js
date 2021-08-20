const fetch = require("node-fetch");
const http = require("http");
const https = require("https");
const got = require("got");
const axios = require("axios");

const queryMessageWithSiminnFetch = async function (id, useHTTPS) {
  return new Promise((resolve, reject) => {
    fetch(
      `http${
        useHTTPS ? "s" : ""
      }://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`
    )
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        console.log("----- FETCH response from Síminn -----");
        console.log(text);
        resolve(text);
      })
      .catch((e) => reject(e));
  });
};

const queryMessageWithSiminnAxios = async (id, useHTTPS) => {
  const response = await axios.get(
    `http${
      useHTTPS ? "s" : ""
    }://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`,
    {
      timeout: 100000,
      headers: {
        accept: "*/*",
        "content-Type": "text/plain;charset=UTF-8",
        "cache-control": "no-cache",
        "accept-encoding": "gzip, deflate, br",
      },
    }
  );
  console.log("----- AXIOS response from Síminn -----");
  console.log("data", response.data);
  return response;
};

// export const queryMessageWithSiminn = async (id) => {
//   const response = axios.get(`https://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`)
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//   });
//   return response;
// };
// ----------------------------------------

const queryMessageWithSiminnHTTP = async (id, useHTTPS) => {
  (useHTTPS ? https : http).get(
    `http${
      useHTTPS ? "s" : ""
    }://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`,
    (res) => {
      let data = [];
      res.on("data", (chunk) => {
        data.push(chunk);
      });
      res.on("end", () => {
        console.log("----- HTTP response from Síminn -----");
        console.log("data", data.toString());
      });
    }
  );
};

// ----------------------------------------

const queryMessageWithSiminnGOT = async (id, useHTTPS) => {
  got
    .get(
      `http${
        useHTTPS ? "s" : ""
      }://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`,
      { responseType: "text" }
    )
    .then((res) => {
      console.log("----- GOT response from Síminn -----");
      console.log("data", res.body);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

module.exports = {
  queryMessageWithSiminnFetch,
  queryMessageWithSiminnAxios,
  queryMessageWithSiminnGOT,
  queryMessageWithSiminnHTTP,
};
