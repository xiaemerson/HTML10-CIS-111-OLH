"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Emerson Xia
   Date: 04-11-2020
   
   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)a
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
   /* Set the date displayed in the calendar */
   var thisDay = new Date("August 24, 2018");

   /* Write the calendar to the element with th id "calendar" */
   document.getElementById("calendar").innerHTML = createCalendar(thisDay);

   /* Function to generate the calendar table */
   function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += "</table>";
      return calendarHTML;
   }

   /* Function to write the calendar caption */
   function calCaption(calDate) {
      // monthName array contains the list of month names
      var monthName = ["January", "Febuary", "March", "April", 
                       "May", "June", "July", "August", "September",
                       "October", "November", "December"];

      //Determine the current month
      var thisMonth = calDate.getMonth();

      //Determine the current year
      var thisYear = calDate.getFullYear();

      //Write the caption
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
   }
   /* Function to write a table row of weekday abbreviations */
   function calWeekdayRow() {
      // Array of weekday abbrevations
      var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      var rowHTML = "<tr>";
      // Look through the dayName array
      for (var i = 0; i < dayName.length; i++) {
         rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
      }
      
      rowHTML += "</tr>";
      return rowHTML;  
   }



