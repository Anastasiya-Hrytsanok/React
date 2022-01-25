import './component.css';

function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

const User = ({ name }) => {
    if (name.toLowerCase() === reverseStr(name).toLowerCase()) {
        return <div className="name--highlighted">It's user {name}</div>
    }
        if (name.length > 5) {
            name = name.slice(0, 5) + "...";
        }
    if (name.indexOf('e') !== -1) {
        return <div>It’s Premium User! Welcome, {name}!</div>
    }
    else return <div>It's user {name}</div>
}

export default User;