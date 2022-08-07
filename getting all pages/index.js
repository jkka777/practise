
let allPages = [];

for (let i = 1; i <= 2; i++) {

    let url = `https://reqres.in/api/users?page=${i}`;

    let res = fetch(url).then((res) => res.json());

    allPages.push(res);
}

let getData = async () => {

    let res = await Promise.all(allPages);

    let data = [...res[0].data, ...res[1].data];

    console.log(data);

    displayData(data);
}

getData();

let container = document.querySelector('.container');

let displayData = (data) => {

    container.innerHTML = '';

    data.forEach((e) => {

        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = e.avatar;

        let name = document.createElement('p');
        name.textContent = `Name - ${e.first_name} ${e.last_name}`;

        let mail = document.createElement('p');
        mail.textContent = `E-Mail - ${e.email}`

        let id = document.createElement('p');
        id.textContent = `Employee ID - ${e.id}`;

        div.append(image, name, mail);

        container.append(div);
    });
};

