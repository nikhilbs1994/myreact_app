const API = process.env.REACT_APP_API_BASE_URL;

export function authUser(loginDetails) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors'
    };

    fetch(API + "login?" + new URLSearchParams(loginDetails), requestOptions)
        //.then(res => res.json())
        .then((result) => {
                console.log(result);
            },(error) => {
                console.log(error);
            }
        );
}