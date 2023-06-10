# nyt-app

`**To run frontend:**`  <br>
`git clone https://github.com/atifreza/nyt-app.git` <br>   
`cd nyt-app` <br>
`npm install` <br>
`npm start` <br>
`Server will start at 3000` <br>
`Login with the users available in the users.json of below fake server repo. e.g: 1.bruno@email.com/bruno 2.techie@email.com/techie` <br>

`To run unit test coverage:` <br>
`npm run test:coverage`<br>
`Navigate to Coverage -> Icov-report -> index.html to view the coverage` <br>

`To run fake server for login/register:`  <br>
`git clone https://github.com/techiediaries/fake-api-jwt-json-server` <br>
`npm install` <br>
`npm run start-auth` <br>
`Server will start at 8000` <br>

`Make sure both the servers are running` <br>  


`Features:` 
`1.Login/Register witht the given user`  
`2.After successfull login, topStories page will be displayed by default for 'world' article with an option to view the top stories for
  'science' article as well` 
`3.User can click on any story and can view the details of the clicked story in the next tab`
`4. User has an option to view the article of his/her choice just by navigating to searchArticle page by clicking on 
  'Go To Search Article' link`
`5.On searh article page, user can see an input field with a search icon where he/she can enter the article of their choice and a list of
  article will be populated based on the search` 
`6.User can view the details of the article by clicking on the articl link and can also view the comments related to that article by
  clickin on 'Click to see comment'`
`7. A modal pop will be opened with the latest comment(Comments are mock up data which is been inserted into the searched article array
   based on the id)`  
`8. Clicking outside the modal can close the modal` 
`9. Article search by user wil be displayed at the top the page and the last 5 search article will be displayed`
`10. At the bottom of the page, pagination has been implemented where user can navigate to different pages and each page will display
    a record of 10 articles`
`11. The application data is persisted, even if the user refreshes the page, they can see the last viewed result`
`12. Private routes has been implemented. If the user is not logged in and if they try to navigate by typing nay random url
    or even the existing urls like, /topStories and /searchArticle, they will see a page not found page`
`13. The accessToken fetch from login is being sent to all the nyt api calls in authorization bearer token.
    For this I have created a proxy middleware`
`14. A middleware has been implemented to get the new accesstoken which will call login api after every 14 mins.
    Just before a minute when token is about to get expired at 15 mins`
`15. Sign out feature is also been implemented` 


`Implemented all the requirements as mentioned in the document:` <br>
`App should run on Chrome/Firefox/Edge/InternetExplorer/Safari browsers.`<br> 
`App should be responsive on all screen resolutions.`  <br>
`Use of Redux for error handling and data persistence.`  <br>
`Use of Axios.` <br>
`Use of React Router.` <br>
`Unit test and code coverage.` <br>
`Use of material UI or bootstrap.`  <br>
`Code to be generic and simple.` <br>
`Leverage today's best coding practices.` <br>



