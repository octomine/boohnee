export const send = (payload: object) =>
    fetch('/', {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
    }).then((data) => console.log(data))

export const getMenu = () =>
    fetch('/menu', {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    }).then((data) => {
        return data.json();
    }).catch((err)=>console.log(`CATCHED!!1 ${err}`))
