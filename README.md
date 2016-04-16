# sembot
A slack bot for software engineering managers

# how to run
In order to try this out, you can use docker.

## create a token for your bot following botkit's instructions
TODO: add link to 

## build the image
Go to the docker directory and then run:
docker build -t sembot .

## run the image
Changing $YOUR_TOKEN with the token generated
docker run --name sembot -e TOKEN={$YOUR_TOKEN} sembot
