export interface INews {
    author: string;
    category: CategoriesType[];
    description: string;
    id: NewsId;
    image: string;
    language: string;
    published: string;
    title: string | number | null;
    url: UrlType;
}

const array: readonly string[] = ['all', 'reg'];
array.push('ii');

const array2: ReadonlyArray<string> = ['all', 'reg'];
array2.push('ii');

const tuple: readonly [string, number] = ['all', 1]
tuple[0]='reg'

const map:ReadonlyMap<string, number>  = new Map([['all', 1], ['reg', 2]]);
map.set('pol', 3);

const set: ReadonlySet<number> = new Set([1, 2, 3]);
set.add(4)








// Exclude
type WihoutAuthor = Exclude <keyof INews, 'author'>;
 
// Extract
type OnlyString = Extract<keyof INews, 'author' | 'description' | 'id'>; 

// NonNullable
type NonNullableTitle = NonNullable<INews["title"]>

// Returntype
function getNeewsTitle(news: INews): string {
    return news.description;
}
type NewsDescriptionType = ReturnType<typeof getNeewsTitle>

// // Instancetype
// class NewsClass implements INews {
//       //  implements
// }
// Omit
type NewsWitoutAuthor = Omit<INews, 'author' | 'id'>



















// export 
interface IBanner  {
    bannerID: number | string;
    // [key: string] : number | string | null
   
}

const banner: IBanner = {
    bannerID: '1',
    // test: 22,
    // test2: null
}


const news ={
    author: "Elisey",
    category: ['all'],
    description: "Typescript",
    id: 1,
    image: null,
    language: 'ru',
    published: 'yes',
    title: "TS",
    url: ''
}



type NewsType = typeof news;
// type ItemType = INews & IBanner

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string | number | null;
}
// interface INews{
//     type: 'news';
//     title: string;
//     urlNews: string;
// }
interface IArticle{
    type: 'article';
    title: string;
    urlArticle: string;
}
type ContetnType = INews | IArticle;

// const getImage = (item: ContetnType) => {
//     if(item.type === 'news'){
//         return item.urlNews;
//     }
//      return item.urlArticle;
   
// }



export type CategoriesType =
|  "regional"
|  "technology"
|  "lifestyle"
|  "business"
|  "general"
|  "programming"
|  "science"
|  "entertainment"
|  "world"
|  "sports"
|  "finance"
|  "academia"
|  "politics"
|  "health"
|  "opinion"
|  "food"
|  "game"
|  "fashion"
|  "academic"
|  "crap"
|  "travel"
|  "culture"
|  "economy"
|  "environment"
|  "art"
|  "music"
|  "notsure"
|  "CS"
|  "education"
|  "redundant"
|  "television"
|  "commodity"
|  "movie"
|  "entrepreneur"
|  "review"
|  "auto"
|  "energy"
|  "celebrity"
|  "medical"
|  "gadgets"
|  "design"
|  "EE"
|  "security"
|  "mobile"
|  "estate"
|  "funny";


// 1. Псевдонимы типов с обобщением
type Container<T> ={
    value: T
};
const stringContainer: Container<string> = {value: 'Hello'};
const numberContainer: Container<number> = {value: 42};

// 2. Интерфейсы с обобщениями
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<number, string> = {first: 1, second: 'two'};

//3. Функцции и обобщения
function echo<T>(item: T): T {
    return item;
} 

console.log(echo<string>("Hello")); //выведет "Hello"
console.log(echo<number>(123));     //выведет 123


interface IUser{
    name: string;
}
type IPerson<T> = T extends IUser ? IUser : null

function logName<T extends IUser = IPerson<IUser>, U = string>(value: T, str: U): void {
    console.log(value.name + str);
}

logName({ name: '', id: 1}, 'Rus');






type categoryType = string;
type UrlType = string | null | undefined;
type NewsId = string;

// class Person {
//     public name: string;
//     private age: number;
//     protected address: string;
//     readonly city: string;
//     constructor(name: string, age: number, address: string, city: string){
//         this.name = name; 
//         this.age = age;
//         this.address = address;
//         this.city = city;
//     }

//     public getGreeting(): string {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old`
//     }

//     private getPrivateData(): string{
//         return 'This is private date: ${this.age}';
//     }
// protected getProtectedData(): string{
//     this.getPrivateData();
//     this.age;
//     this.city = 'Moscow';
//     return `this is protected data: ${this.address}`;
// }

// }

// const esia = new Person('Esia', 2, 'Balashiha', 'Gheldor');
// console.log(esia.name)
// console.log(esia.getGreeting())

// console.log(esia.age)
// console.log(esia.getPrivateData())

// console.log(esia.address)
// console.log(esia.getProtectedData())



