import { Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

//extend properties for two stacks to communicate with eah other i.e. ApiStack and LambdaStack
interface ApiStackProps extends StackProps {
    helloLambdaIntegration: LambdaIntegration
}


export class ApiStack extends Stack {

    constructor(scope: Construct, id: string, props: ApiStackProps) {
        super(scope, id, props);


        const api = new RestApi(this, "SpacesApi");
        const spacesResources = api.root.addResource('spaces');
        spacesResources.addMethod('GET', props.helloLambdaIntegration)  // export helloLambdaIntegration in Lambda Stack
    }
}