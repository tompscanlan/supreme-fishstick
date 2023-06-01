package main

import (
	"context"
	"fmt"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"

	"github.com/aws/aws-sdk-go/service/dynamodb"
)

type MyEvent struct {
}

func HandleRequest(ctx context.Context, name MyEvent) (string, error) {

	tablename := os.Getenv("API_SHORTURL_SHORTURLSTABLE_NAME")
	sess, err := session.NewSession()
	if err != nil {
		fmt.Println("Error getting session:")
		fmt.Println(err)
		return "0", err
	}

	svc := dynamodb.New(sess, aws.NewConfig().WithLogLevel(aws.LogDebugWithHTTPBody))

	input := &dynamodb.DescribeTableInput{
		TableName: aws.String(tablename),
	}

	fmt.Println("input:")
	fmt.Println(input.String())
	resp, err := svc.DescribeTable(input)
	if err != nil {
		fmt.Println("failed query")
		fmt.Println(err)

		return "0", err
	}
	fmt.Println(resp)

	return fmt.Sprintf("%d", *resp.Table.ItemCount), nil
}

func main() {
	lambda.Start(HandleRequest)
}
