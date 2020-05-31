// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//     name: "Chris Kistner",
//     age: 30,
//     hobbies: ["warhammer", "hiking", "gaming"],
//     role: [2, "Author"]
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Chris Kistner",
    age: 30,
    hobbies: ["warhammer", "hiking", "gaming"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Warhammer", 45];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
