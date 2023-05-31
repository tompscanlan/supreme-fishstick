package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"

	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/expression"
)

type MyEvent struct {
}

func HandleRequest(ctx context.Context, name MyEvent) (string, error) {
	sess, err := session.NewSession()
	if err != nil {
		fmt.Println("Error getting session:")
		fmt.Println(err)
		return "0", err
	}

	svc := dynamodb.New(sess, aws.NewConfig().WithLogLevel(aws.LogDebugWithHTTPBody))

	keyCondition := expression.Key("id").BeginsWith("a")
	expr, err := expression.NewBuilder().WithKeyCondition(keyCondition).Build()
	if err != nil {
		fmt.Println("Error building expression:")
		fmt.Println(err)

		return "nil", err
	}

	input := &dynamodb.QueryInput{
		TableName:                 aws.String("ShortUrls-f6gjuvmkzzd2fpgp56gqf5e4gm-dev"),
		Select:                    aws.String(dynamodb.SelectCount),
		KeyConditionExpression:    expr.KeyCondition(),
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
	}

	fmt.Println("input:")
	fmt.Println(input.String())
	resp, err := svc.Query(input)
	if err != nil {
		fmt.Println("failed query")
		fmt.Println(err)

		return "0", err
	}
	fmt.Println(resp)

	return fmt.Sprintf("%d", 16), nil
}

func main() {
	lambda.Start(HandleRequest)
}
