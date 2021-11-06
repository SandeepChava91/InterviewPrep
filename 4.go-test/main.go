package main

import (
	"encoding/json"
	"fmt"
)

func main() {
	fmt.Println("Testing Go")

	var response = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Your Business</title>
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<!--# if expr="$status = 502" -->
				<meta http-equiv="refresh" content="2">
			<!--# endif -->
		</head>
	<body>
		<!--# if expr="$status = 502" -->
			<h1>We are updating our website </h1>
			<p>This is only for a few seconds, you will be redirected.</p>
		<!--# else -->
			<h1><!--# echo var="status" default="" --> <!--# echo var="status_text" default="Something goes wrong" --></h1>
		<!--# endif -->
	</body>
	</html>`

	type Bird struct {
		Species     string
		Description string
	}

	var myStoredVariable Bird

	json.Unmarshal([]byte(response), &myStoredVariable)

	fmt.Println(myStoredVariable)
}
