const url = 'wss://neoby.ru:49385'
const connection = new WebSocket(url)

console.log('scripts on');

connection.onopen = () => {
    console.log('connected');
    connection.send('hey')
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`, error)
}

connection.onmessage = (e) => {
    console.log(e.data)
}