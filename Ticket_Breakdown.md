# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

**STORY SUMMARY**
Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
 

**TASK#1**

 
**DESCRIPTION**
Database change to add a custom filed in Agent table

**BUSINESS RULES**
1. None

**BUSINESS ACCEPTANCE CRITERIA**

	1. Add a new field CustomId NVARCHAR(100):UNIQUE to the Agent table
	2. Create Stored procedures for CRUD operation 

 

**BUSINESS OBJECTS**
List which business objects are impacted by this story, in this case the Agent table

**DOCUMENTATION**
Please summarize user guide and documentation updates associated with this story.


**REWORK**:  100%






**TASK #2**

 
**DESCRIPTION**
Backend(API) changes

**BUSINESS RULES**
1. None

**BUSINESS ACCEPTANCE CRITERIA**
	There are two options to implement this functionality from the backend.
  1.  If the Agent model is being used by different clients, create a new class/model CustomAgent <inherits> Agent and an interface ICustomAgent, this will not have any imapct on the existing functioanlity/clients.
  2. In case one single tanent database/model, use the below steps:
      1. Add a new property CustomId string to the Agent model
      2. Create/Update a method UpSertAgent(agentModel) to Create and Update Agent
      3. Modify getShiftsByFacility method and include CustomId property for fetch.
	



**TEST PLAN**
List what portaions of the Test Suite should be updated
Unit Tests - Yes, Special story testing



**TEST CASES**
	1. Functional Requirements (as per above)
	a). Test if the Agent can be updated with the CustomId 


**BUSINESS OBJECTS**
List which business objects are impacted by this story, in this case Agent model has been changed



**DOCUMENTATION**
Please summarize user guide and documentation updates associated with this story.


**REWORK**:  100%





**TASK #3**

 
**DESCRIPTION**
FrontEnd(UI/UX) changes

**BUSINESS RULES**
1. None

**BUSINESS ACCEPTANCE CRITERIA**
	 
	1. Add an editable Custom Id to the Agent Screen and do the binding.
	2. Add the CustomId filed to UI model, that can be passed with http requests (UpSertAgent)	
	3. Bind the CustomId to the PDF file while generating the report (generateReport)

**TEST PLAN**
List what portaions of the Test Suite should be updated
Jest Tests - Yes, Special story testing



**TEST CASES**
	1. Functional Requirements (as per above)
	a). Test if the Agent can be updated with the CustomId,
	b). Check if the CustomId of the agent appears on the PDF report.


**BUSINESS OBJECTS**
List which business objects are impacted by this story, in this case Agent model has been changed



**DOCUMENTATION**
Please summarize user guide and documentation updates associated with this story.


**REWORK**:  100%
