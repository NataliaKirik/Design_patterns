//ОБъект который есть в системе в 1 экземпляре (создается только 1 раз) + у него есть глобальная точка доступа
class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instanse
        }
        Database.instanse = this
        Database.exists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const myMongoDB = new Database('mongoDB')
console.log(myMongoDB.getData());  //mongoDB
const mySql = new Database('SQL')
console.log(mySql.getData());   //mongoDB

//_______________________________________________________

class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance
        }
        this.counter=0
        Counter.instance = this
    }

    increase() {
        return this.counter += 1
    }
}

const counter_1 = new Counter()
const counter_2 = new Counter()
counter_2.increase()
counter_2.increase()
counter_2.increase()
console.log(counter_1.increase()); //4
