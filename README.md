# Lambda Function with GitHub Actions Deployment

This project demonstrates a basic AWS Lambda function written in TypeScript, deployed using GitHub Actions. The Lambda function is triggered by an EventBridge (formerly CloudWatch Events) rule.

## Overview

The Lambda function:
- Receives an HTTP request.
- Returns the request body in the response with a `200 OK` status.

## Architecture

Here is the architecture diagram for this project:

![Architecture Diagram](assets/architecture.svg)

## AWS CloudFormation Template

The CloudFormation template sets up:
- An AWS Lambda function.
- An IAM Role for Lambda execution.
- An EventBridge rule to trigger the Lambda function on a schedule.

## Deployment

### Prerequisites

- AWS CLI configured with appropriate permissions.
- S3 bucket for storing Lambda deployment package.
- GitHub repository with Secrets configured for AWS credentials.

### Steps

1. **Prepare Lambda Code**

   - Write your Lambda function in TypeScript.
   - Compile the TypeScript code to JavaScript.

2. **Create CloudFormation Stack**

   - Update `template.yaml` with your S3 bucket and key information.
   - Deploy the stack using AWS CloudFormation.

3. **Set Up GitHub Actions**

   - Add a `.github/workflows/deploy.yml` file to your repository.
   - Configure GitHub Secrets for AWS credentials.
   - Commit and push your changes.

### Example Usage

To manually test the Lambda function, you can use the AWS Lambda console or AWS CLI. The Lambda function will respond with the body of the request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- AWS Lambda
- AWS EventBridge
- GitHub Actions
- TypeScript

## Testing

### Manual Testing

To manually test the Lambda function, you can use the AWS Lambda console or AWS CLI.

1. **Using the AWS Lambda Console**

   - Go to the AWS Lambda console.
   - Select your function (`lambda-gh-actions-test`).
   - Click on the "Test" tab.
   - Create a new test event with a sample payload. For example:
     ```json
     {
       "key1": "value1",
       "key2": "value2"
     }
     ```
   - Click "Test" to invoke the function and see the result.

2. **Using AWS CLI**

   Use the following command to invoke the Lambda function and pass a sample payload:
   ```bash
   aws lambda invoke \
     --function-name lambda-gh-actions-test \
     --payload '{"key1": "value1", "key2": "value2"}' \
     response.json
