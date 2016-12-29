/**
 * Created by wangweiwei on 16/11/28.
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "Will" };

document.body.innerHTML = greeter(user);