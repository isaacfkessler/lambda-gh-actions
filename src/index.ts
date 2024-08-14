import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body || '{}');

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Request received successfully!',
            requestBody: body
        }),
    };
};
