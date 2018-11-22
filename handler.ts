import { Handler, Context, Callback } from 'aws-lambda';
import * as dotenv from "dotenv";

dotenv.config();

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

    requestPromise.post(process.env.DISCORD_WEBHOOK, options).then(
        function (response: any) {
            callback(undefined, response);
            console.log('got response', response.body, response.headers);
        },
        function (response: any) {
            console.log('got error', response.body, response.headers, response.statusCode, response.statusMessage);
        }
    );
};

export { postMessage }