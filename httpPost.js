const axios = require('axios');

const postData = async () => {
  try {
    const data = {
      // 在這裡放置您要傳送的資料
      key1: 'value1',
      key2: 'value2'
    };

    const response = await axios.post('http://127.0.0.1:5000', data);
    console.log('Response:', response.data);
  } catch (error) {
    if (error.response && error.response.data) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
};

postData();