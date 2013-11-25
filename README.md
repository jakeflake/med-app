### MED-App v0.0.1
 
| what          | where                                          |
|---------------|------------------------------------------------|
| github | https://github.com/jakeflake/med-app  |
| cloud9 | https://c9.io/jakeflake/med-app       |


### Running the server

0. Before you do anything, make sure the server is NOT running by checking the Run button in the top toolbar. If it sais "Stop" instead of "Run",
someone else already started the server and you are fine. If you want to stop the server, go to the bottom terminal bar, click somewhere on it
and then press CTRL+C to stop the service. Or click the "STOP" button! ;)

1. Open app.js file
2. Click on the green "Run" button (this starts the Node.js server)
3. Click on "View -> Terminals -> New Terminal"
4. In the new window, enter "./mongod" (withouth "") into the console and press enter (this starts the database)
5. Open a new tab in your browser 
6. Go to "https://med-app-c9-jakeflake.c9.io/" (this should display "Hello World!") 
7. and "https://med-app-c9-jakeflake.c9.io/db" (this should display the current database entries as plain JSON data)
8. Work with the data
9. If you want to stop the server, simply press CTRL+C in the terminal tab or press the red "STOP button


### Using the database

0. Make sure the server is not running
1. Open db.js file
2. Look at the code to understand the access and rules to the db
3. Click on "View -> Terminals -> New Terminal"
4. In the new window, enter "./mongod" (withouth "") into the console and press enter (this starts the database)
5. Go to the terminal at the bottom and enter "mongo --host $IP"
6. You are now in the mongodb shell and can enter special commands (look here: http://docs.mongodb.org/manual/tutorial/getting-started/)
7. Modify the database
8. If you are done, write "exit" in the bottom terminal tab and use the CTRL+C command to close the database in the new terminal window you openend at the beginning


### Commiting changes to Github

1. Make some changes to the project files
2. Enter "git status" into the terminal bar to see if the changes were recognized by Github
3. Have a look at: http://rogerdudler.github.io/git-guide/
4. Add all new and modified files and folders via the add command (e.g. git add file1.jpg)
5. The same with rm for removed files (if there are any)
6. When you added all changed files (check with "git status") make a new commit by entering: git commit -m "Commit message"
7. Push the new commit to Github by entering: git push origin master
8. That's it.

