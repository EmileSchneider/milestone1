# Capstone Roadmap #
## FrontEnd:
* Week Component
  * Day Component
    * Exercise Component
      * CodeBlock Component
        * CommentBlock Component
          * Comment Component

## BackEnd 
an infrastructure layer with the GitHub Api calls for code and pull requests
a repository layer for the database 
Domain, Service and Orchestration are the FE

### Vision:
create a single point of reference for the students to help them write as much code as they can during a day. 
this can be achieved by structuring the days in single Exercises (Exercise Component). Each exercise is a Challenge that needs to be solved. All exercises together make the DayProject.
While working on the exercise the student has direct access to relevant(!) documentation, slides and StackOverflow links. Thanks to an GitHub Integration if the student has a bug they can make a pull request on Github and send the TA a Message. The TA can comment the pull request, send links to articles, stackoverflow, documentation or share tips like short cuts, plugins, etc. 



### Path to MVP:

**Analysis:** This project requires a Client Server setup. The server holds a Database and sends the client only what he needs (and wants) to see.
The BackEnd will have 2 main abstraction layers **MAL0** and **MAL1**. **MAL0** will cover the **DataBase** and the **API Calls** to add to and update the **DB**. **MAL0** provides the collected data in Ingredients. 

Imagine a kitchen of a big restaurant. **MAL0** would be everyone responsible for getting ingredients, sort and clean them so that the cooking staff can use them to prepare various dishes without having to worry about inconsitency. 
**MAL1** receives the messages from the clients and sends out components, or to stay with the kitchen metaphor, delivers the meals.

The **CLIENT** manages user input and displays the react components it received from **MAL1**.
 
 
### Work Philosophy

The nature and ambition of this project requires careful planning and a fast execution of ideas into working features. 
Careful Use Of Pen And Paper
Before coding I will lay out the levels of abstraction required by the tackled challenge. Between the layers I will describe in Pseudo Code which Methods to use and how to arrange them in an algorithm. Once that is done describe some possible tests ranges for the algorithem and write it down.
Coding
Once the whole program has been written down I can focus on coding debugging and refactoring. Using TDD only when it makes sense, where expected behavior is well defined.
At the end of the day I want to have my feature to work as planned, with the the least amount of hacking necessary.

# 1. Milestone:

Estimated Time Consumption: 2 days.

_Create the bare bone front end._

**GOAL:**
	To display some real code and comments.
	Build get and set methods for the data
	Pass it hardcoded data for results
	use MaterialDesign as a philosophy and because of lack of talent

**EXECUTION:**
	User Story:
	The Studente (S) can navigate through the modules of the course go to specific exercises. Inside the EXC (exercise 	component) he can acces all the relevant information for the EX (exercise). That would be the exercise text and the code 	(solution) which is on GitHub.

1. Step:
Create a react-app and create all of the necessary components.

2. Step:
Give the barebone layout a nice MaterialUI touch.

3. Step:
Create a repo on GitHub with some code
Get the data in the same (probably JSON) format. Put it into some constants

4. Step:
Display the code inside the code component, formating does not matter yet.

5. Step:
Do the same with a pull request, and the comments to the pull request.

6. Step:
Display the comments


# 2. Milestone 

ETC 1 day

_Build a node.js sever without the use of a complicated framework. Use REST API and AJAX (or whatever is usefull) to send the same data as used in Milestone 1 to send it to the client on demand._

**GOAL:**
Display the same data in the same fashion as in milestone1. Create a DB on the Data an build the MAL1 to access the data base from the components.

1. Step:
Create a simple node js server

2. Step:
Serve the webpack react-app over that server

3. Step: 
Create a DB which holds the Data

4. Step:
Creat the MAL1 between react components and the DB.

# 3. Milestone

ETC 1 Day

_Write the infrastructure layer MAL0 with the Api Calls to GitHub. Hardcode the addresses/use the same demo repo as in ML1 and ML2._

**GOAL:**
Design a expandable architechture to add functionality later. 

1. Step:
if REQEUSTEDDATA isIn DB:
	return DATA
else
	callAPI
	updateDB
	return DATA
	
2. Step:
implement a TestRepo on Github
MAL1 \*TestRepo points to that Repo and requests some DATA 

MAL0 returns DATA

# 4. Milestone

ETC 1 Day + WE

_Write user authentification with GitHubLogIn. Create a controlpage to manualy genearte ExerciseComponents with links to github repos and data_

