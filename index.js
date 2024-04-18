
// Define the API URL
const url = "https://jsonplaceholder.typicode.com/posts";
const tbody = document.getElementById("tbody");

//  Make a GET request
fetch(url)
  .then(response => {
    // if (!response.ok) {
    //   throw new Error(`Network response was not "ok"`);
    // }
    return response.json();
  })
  .then(users => {
    users.forEach(user => {
      tbody.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${user.id}</th>
         <td class="px-6 py-4">${user.userId}</td>
            <td class="px-6 py-4">${user.title.substring(1, 10)}...</td>
           <td class="px-6 py-4">${user.body.substring(1, 50)}...</td>
           <td class="px-6 py-4 text-right">
               <i class="bi bi-trash"></i>
               <i class="bi bi-eye"></i>
              <i class="bi bi-pencil-square"></i>
        </td>
        </tr>`;
    });
  })


// POST REQUEST

const requestBody = {
  title: "Sample Title",
  body: "Sample Body",
  userId: 1, 
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
};

fetch(url, requestOptions)
  .then((response) => {
    return response.json();
  })
  .then((post) => {
    tbody.innerHTML += `
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${post.id}</th>
        <td class="px-6 py-4">${post.userId}</td>
        <td class="px-6 py-4">${post.title.substring(1, 10)}...</td>
        <td class="px-6 py-4">${post.body.substring(1, 50)}...</td>
        <td class="px-6 py-4 text-right">
          <i class="bi bi-trash"></i>
          <i class="bi bi-eye"></i>
          <i class="bi bi-pencil-square"></i>
        </td>
      </tr>`;
  })

  

