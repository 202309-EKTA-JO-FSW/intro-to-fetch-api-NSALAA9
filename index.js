const axios = require('axios');

// Step 1: Write a Function to Fetch Data from the API Endpoint
async function fetchUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Steps 2 to 6 remain the same
fetchUserData().then((userData) => {
  // Step 3: Modify Data
  const modifiedUsers = userData.map((user) => ({
    Name: user.name,
    Username: user.username,
    Email: user.email,
    Address: user.address.street,
    Phone: user.phone,
    Website: user.website,
    Company: user.company.name,
  }));

  // Step 4: Filter the Data
  const filteredUsers = modifiedUsers.filter((user) => user.Email.includes('.biz'));

  // Step 5: Sort the Data
  const sortedUsers = modifiedUsers.sort((a, b) => a.Name.localeCompare(b.Name));

  // Step 6: Log the results
  console.log('Modified Users:');
  console.log(modifiedUsers);
  console.log('\nFiltered Users (with .biz domain email):');
  console.log(filteredUsers);
  console.log('\nSorted Users (by Name):');
  console.log(sortedUsers);
});
