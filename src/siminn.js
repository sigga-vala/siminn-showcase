const fetch = require("node-fetch");

const queryMessageWithSiminn = async function (id) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`
    )
      .then((res) => {
        console.log("Blob interceptor", res.status);
        return res.text();
      })
      .then((text) => {
        console.log("----- Received response from Síminn -----");
        console.log(text);
        console.log(text);
        resolve(text);
      })
      .catch((e) => reject(e));
  });
};

module.exports = {
  queryMessageWithSiminn,
};
// ----------------------------------------
// export const queryMessageWithSiminn = async (id) => {
//   const response = await axios.get(`http://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`, {
//     timeout: 100000,
//     headers: {
//       accept: '*/*',
//       'content-Type': 'text/plain;charset=UTF-8',
//       'cache-control': 'no-cache',
//       'accept-encoding': 'gzip, deflate, br',
//     },
//   });
//   console.log('data', response.data);
//   console.log('status', response.status);
//   console.log('statusText', response.statusText);
//   console.log('headers', response.headers);
//   console.log('config', response.config);
//   return response;
// };
// ----------------------------------------

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

// export const queryMessageWithSiminn = async (id) => {
//   http.get(`http://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`, (res) => {
//     let data = [];
//     res.on('data', (chunk) => {
//       data.push(chunk);
//     });
//     console.log('statusCode:', res.statusCode);
//     console.log(' header:', res.headers);
//     console.log('Body', res.body);
//   });
// };

// ----------------------------------------

// export const queryMessageWithSiminn = async (id) => {
//   got
//     .get(`https://vasp.siminn.is/smap/query?L=timatal&P=12TimaPiz&messageid=${id}`, { responseType: 'text' })
//     .then((res) => {
//       const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//       console.log('Status Code:', res.statusCode);
//       console.log('Date in Response header:', headerDate);
//       console.log('Data', res);

//       const users = res.body;
//     })
//     .catch((err) => {
//       console.log('Error: ', err.message);
//     });
// };
