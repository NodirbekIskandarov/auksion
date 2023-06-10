const convertDate = (arg) => {
    if (arg) {
        let year = arg.slice(0, 4)
        let month = arg.slice(5, 7)
        let day = arg.slice(8, 10)
        return `${day}.${month}.${year}`
    }
}

const convertTime = (arg) => {
    if (arg) {
        return arg.slice(11, 16)
    }
}

export { convertDate, convertTime }
