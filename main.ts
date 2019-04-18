class User {
    name: string;
    constructor(name: string) {
        this.name=name;
    }
}

type Umap = Map<User,number>;

const um: Umap = new Map();

const u = new User("foo");
const u2 = new User("foo");

um.set(u,1);
um.set(u2,99);

u.name = "bar";

um.set(u,2);

u.name = "bla";





