package main

import (
  "fmt"
  "context"
  "github.com/aws/aws-lambda-go/lambda"
)

type MyEvent struct {
}

func HandleRequest(ctx context.Context, name MyEvent) (string, error) {
  return fmt.Sprintf("%d", 15 ), nil
}

func main() {
  lambda.Start(HandleRequest)
}
