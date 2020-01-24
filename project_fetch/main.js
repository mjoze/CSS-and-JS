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
        .then(json => showUsers(json.results))
        .catch(err => console.log(err))
}

const showUsers = (users) => {
    const resultArea = document.querySelector('.user-list');
    resultArea.textContent = "";
    users.forEach(user => {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.last.toUpperCase()}</div>
        <img class="user__image" src=${user.picture.medium}>
        `
        resultArea.appendChild(item)
    });
}


document.querySelector('.genarator').addEventListener('submit', getUsers);