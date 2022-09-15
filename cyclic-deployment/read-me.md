Instructions for Cyclic deployment.

1. go to -> https://www.cyclic.sh/

2. Sign in with your GitHub account.

3. Go to the button -> Link your Own

4. Search for your repository 
    - click on conect
    - Deployment will start
    - You will receive a message like "You're Live!"
    - and ----->               api deployed at:
                              https://-some-random-words-.cyclic.app

5. Now you will need to set Environment Variables, Cyclic will need to have acces to the data into .env file.
    
  - Click on  ->   environment variables console.
      - Set the MONGODB_URI , and SESSION_SECRET, and all others enviroment variables that you may have.
      - Click on Save.

6. Lets pick another Subdomain for our app by clicking on -> Environments
    - Pick one name for your custom Subdomain 
    - Your app will still be accessible at it's default url,
    - Click on Save.

