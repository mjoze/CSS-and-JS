const getUsers = (e) => {
    e.preventDefault();

    const usersNumbers = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;

    const url = `https://randomuser.me/api/?results=${usersNumbers}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error("not 200")
            } else {
                return response.json()
            }
        })
        .then(json => console.log(json))
        .catch(err => console.log(err))
}


document.querySelector('.genarator').addEventListener('submit', getUsers);