export const postData = async (data)  => {
    // const randomId = Math.round(Math.random());
    const requestUrl = '/data';
    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    const json = await response.json();

    return json;
}

export const getData = async () => {
    const requestUrl = '/data';
    const response = await fetch(requestUrl, {
      method: 'GET'
    });
  
    const json = await response.json();
  
    return json;
  };
  