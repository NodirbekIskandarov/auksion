export default function checkDeadlineDetail(deadline) {
    if (deadline) {
        const reformattedDeadline = new Date(deadline).getTime()
        // let seconds = Math.floor(deadlineInMill / 1000)
        // let minutes = Math.floor(seconds / 60)
        // let allHours = Math.floor(minutes / 60)
        // let days = Math.floor(allHours / 24)
        // let hours = Math.floor(allHours - days * 24)
        // seconds = seconds % 60
        // minutes = minutes % 60
        return reformattedDeadline - new Date().getTime()
    }
}
