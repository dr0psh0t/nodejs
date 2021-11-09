//  here's how you would get a JSON resource, and parse it, using promises:

const getFirstUserData = () => {
    return fetch('/users.json')                     //  get users list
        .then(response => response.json())          //  parse JSON
        .then(users => users[0])                    //  pick first user
        .then(user => fetch(`/users/${user.name}`)) //  get user data
        .then(userResponse => userResponse.json()); //  parse JSON
};

getFirstUserData();

//  And here is the same functionality provided using await/async:

const getFirstUserData = async () => {
    const response = await fetch('/users.json'); // get users list
    const users = await response.json(); // parse JSON
    const user = users[0]; // pick first user
    const userResponse = await fetch(`/users/${user.name}`); // get user data
    const userData = await userResponse.json(); // parse JSON
    return userData;
};

getFirstUserData();