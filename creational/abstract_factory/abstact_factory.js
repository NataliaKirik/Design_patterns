// cоздает интерфейс группирующий другие фабрики, абстракция для фабрики и фабричного метода

//abstract factory
function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory() : familyCarFactory()
}


//factories
function sportCarFactory() {
    return new I3()
}

function familyCarFactory() {
    return new Gran_tourer()
}

class I3 {
    info() {
        return 'bmw i3 was created'
    }
}

class Gran_tourer {
    info() {
        return 'bmw gran tourer was created'
    }
}

const myCar = bmwProducer('sport')
console.log(myCar.info());
