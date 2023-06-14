export default function checkDeadline(deadline) {
    const reformattedDeadline = new Date(deadline).getTime()
    if (reformattedDeadline > new Date().getTime()) {
        const deadlineInMill = reformattedDeadline - new Date().getTime()
        let seconds = Math.floor(deadlineInMill / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let milliSeconds = '00'
        seconds = seconds % 60
        minutes = minutes % 60
        return `${hours}:${minutes}:${seconds}:${milliSeconds}`
    } else {
        return `Auksion vaqti tugallangan`
    }
}
