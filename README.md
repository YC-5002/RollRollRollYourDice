# RollRollRollYourDice
**Project Overview**
International dice expert, Danielle Danziger needs to run some numbers on some dice rolls.
She’s decided to hire you to create a web page for her that will roll a whole bunch of dice and
report the very important results. She wants to be able to run a test with 1, 2, or 3 dice and she
wants to know the following:
  ● Frequency of each result
  ● Mean
  ● Median
  ● Mode
  ● Frequency of doubles
  ● Frequency of triples
  
**Display**
The list below includes the essential elements of the page.
  ● You will need a form.
    o The form should include a way for the user to input the following information:
      ▪ How many dice to roll (1, 2, 3).
      ▪ How many times to roll the dice.
  ● You will need a button that rolls the dice.
  ● The table will show all of the relevant information from the rolls including:
    o The frequency of each results
      ▪ If one die is rolled, the table should only show frequencies for results 1 to 6.
      ▪ If two dice are rolled, the table should only show frequencies for results 2 through 12.
      ▪ If three dice are rolled, the table should only show frequencies for results 3 through 18.
    o How many doubles were rolled (only if 2 or 3 dice rolled).
    o How many triples were rolled (only if 3 dice rolled).
    o The mean.
    o The median.
    o The mode.
  ● Use CSS to create a pleasant and intuitive display.
  
**Functionality**
The page has limited user interaction. The user can always update the number of dice and the
number of rolls. Each time the user clicks the button, the page should read the information out
of the form and generate results accordingly.
For the mean, the output should be displayed to the nearest hundredth.
Since not all of the pieces of information will be shown for every roll, the table will need to be
updated dynamically. You will have to add and remove rows and cells on the fly each time the
button is pushed.

**Enhancements**
  ● For this enhancement, you will need to learn about Arrays, which is a level 4 topic.
    ○ Instead of overwriting the information for a series of rolls, store that information in a list.
    ○ Create 3 more tables, which show the cumulative results for several experiments include 1, 2, and 3 dice.
    
**Necessary Programming Skills**
  ● Comprehension of the specifications sheet.
  ● Planning
    o Figure out the information you need to keep track of.
      ▪ This information will become your global variables.
    o Plan out the individual tasks your program must perform.
      ▪ Think through the steps for each task.
      ▪ Think through the information your task needs (where does it come from?).
      ▪ These will become your functions.
    o Plan out the user interface.
      ▪ You can start with the barest interface, but you should have an idea what you want the final product to look like.
  ● Managing your variables
    o What’s global, local, and passed through as parameters (hint - this program can use all three)?
    o Do you have a complete back end design (variables and functions that work the program)?
    o Does your back end inform your display?
  ● Assigning functions as tasks
    o Does your program sort out the different tasks into their own functions?
  ● Sequencing
    o Does your program sequence from the user interaction into the necessary functions?
    o Is there an efficiency to your code that flows from the design document?
  ● An intuitive user experience
    o Is your display appropriate to the program (what’s viewable and what scrolling has to be done)?
    o Is your display adaptable to other resolutions?
    o Is the interface intuitive?
