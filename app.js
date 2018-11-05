const schedule = require('node-schedule');
const emitter = require('emitter-io');
const http = require('http');

// import axios from './config/axios'
import axios from 'axios'

const app = http.createServer();

const client = emitter.connect({
    host: '127.0.0.1'
});

let users = [];

client.on('connect', async () => {
    // const { data } = await axios.get('/staffUsers/getActiveUsers');
    const { sms } = await axios.post('http://10.96.198.25:7000/sms/send', {
        password: "ndb123",
        message: "I am Anju",
        destinationAddresses: ["tel:94773820436"],
        applicationId: "APP_000001"
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(sms);
    // users = data.filter((user) => {
    //     return user.staffRole.roleType == "TELLER"
    // });
    // console.log('users', users);
    // client.subscribe({
    //     key: 'HcTHY8T9MjyE5-ZSk7Za3pW8KAUpVC9I',
    //     channel: 'test'
    // });
});

client.on('keygen', function(msg) {
    console.log(msg);
});

client.on('message', (msg) => {
    console.log(msg.asString());
})

schedule.scheduleJob('52 18 * * *', () => {
    console.log('running')
})

app.listen(5000, () => {
    console.log(`Server started in port ${app.address().port}`)
})
