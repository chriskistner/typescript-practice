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

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "Chris Kistner",
    age: 30,
    hobbies: ["warhammer", "hiking", "gaming"],
    role: Role.ADMIN
}

let favoriteActivities: any[];

favoriteActivities = ["Warhammer", 45];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}