import { Handler, Context, Callback } from 'aws-lambda';
import * as dotenv from "dotenv";

dotenv.config();

interface HelloResponse {
    statusCode: number;
    body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
    const response: HelloResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: Math.floor(Math.random() * 10)
        })
    };

    callback(undefined, response);
};

const postMessage: Handler = (event: any, context: Context, callback: Callback) => {
    let content = 'Testing new message'
    var requestPromise = require('minimal-request-promise'),
        options = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content
            })
        };

    requestPromise.post(process.env.DISCORD_WEBHOOK, options);

    //   requestPromise.post(process.env.DISCORD_WEBHOOK, options).then(
    //     function (response) {
    //       console.log('got response', response.body, response.headers);
    //     },
    //     function (response) {
    //       console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
    //     }
    //   );
};

export { hello, postMessage }