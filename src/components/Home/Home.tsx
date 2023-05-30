// TODO: Next step is to create components for the form to create an event. This will involve creating a model in flask as well to save
// events to the database. I'll also have to set up user authorization through firebase to save events to a user. 
// After that, I'll add the functionality of clicking on a day to bring up the form and all that
// Then, I will work on creating a daily view and setting the current view to monthly view, maybe I'll make a weekly view as well
// I should also add the ability to view more than just the current month via arrow buttons to view other months

import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

import { NavBar } from '../Navbar';

interface Props {
  title: string;
}

const Root = styled('div')({
  padding: 0,
  margin: 0
});

const CalendarContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh' // Adjust the height as per your preference
});
  
const CalendarMonth = styled('h2')({
    marginBottom: '1rem'
});

const CalendarGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px',
    backgroundColor: '#eee',
    maxWidth: '9000px', // Adjust the width as per your preference
    minWidth: '80%',
    minHeight: '70vh',
    padding: '1rem' // Adjust the padding as per your preference
});
  

const CalendarCell = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ddd'
  }
});

const getCurrentMonthCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
  
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
  
    const calendar = [];
  
    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      calendar.push(<CalendarCell key={`empty-${i}`} />);
    }
  
    // Add cells for each day in the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(<CalendarCell key={day}>{day}</CalendarCell>);
    }
  
    return calendar;
  };

  const getMonthName = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  
    const today = new Date();
    const month = today.getMonth();
  
    return monthNames[month];
  };

const Calendar = () => {
    const calendar = getCurrentMonthCalendar();
    const monthName = getMonthName();

    return (
        <CalendarContainer>
            <CalendarMonth>{monthName}</CalendarMonth>
            <CalendarGrid>{calendar}</CalendarGrid>
        </CalendarContainer>
    );
    };

export const Home = (props: Props) => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Example: 30 days in the current month

  const handleDayClick = (day: number) => {
    console.log(`Clicked on day ${day}`);
    // Show the task form or perform any other desired action
  };

  return (
    <Root>
      <NavBar />
      <Calendar />
    </Root>
  );
};
