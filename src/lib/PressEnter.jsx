import { BODY } from "../constans/Constans";

export function pressEnter(navigation){
    BODY.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            navigation('/home');
        }
    });
}

export function deleteEnter(navigation){
    BODY.removeEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            navigation('/home');
        }
    });
}