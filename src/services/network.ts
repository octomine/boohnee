export const send = (payload: object) =>
    fetch(`/`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
    }).then((data) => console.log(data.body));
