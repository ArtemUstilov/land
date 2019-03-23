export const postRequest = async (path, data) => { // aka { name: name, phone: phone }
  return await fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .catch(error => console.error(error))
};
 /*
 usage:
 postRequest('https://google.com/hyisosi', {name, phone})
 .then(res => ShowUser("Wait for a call"))
 .catch(error => ShowUser(error);
  */
