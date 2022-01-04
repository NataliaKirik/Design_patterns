//«конструктор»  — это специальный метод, используемый для инициализации созданного объекта, как только для него выделили память
// используется для определения значений свойств элементов и методов, когда объект впервые создается.
//_____________________________________________________

// function Server(name, ip) {
//   this.name = name
//   this.ip = ip
// }
//
// Server.prototype.getUrl = function() {
//   return `https://${this.ip}:80`
// }

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())
