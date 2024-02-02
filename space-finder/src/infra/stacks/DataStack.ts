import { Stack, StackProps } from 'aws-cdk-lib';
import { AttributeType, ITable, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getSuffixFromStack } from '../Utils';

export class DataStack extends Stack {

    public readonly spacesTable: ITable;

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // creating Dynamo DB Table 

        const suffix = getSuffixFromStack(this);

        this.spacesTable = new Table(this, 'SpacesTable', {
            partitionKey: {                         // important property of Dynamo Table
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `SpaceStack-${suffix}`
        })



    }

}