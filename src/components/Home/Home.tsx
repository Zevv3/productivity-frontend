import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

import { NavBar } from '../Navbar';

interface Props {
  title: string;
}

const Root = styled('div')({
  padding: 0,
  margin: 0,
  display: 'flex', // Added display flex
});

const Panel = styled('div')({
  backgroundColor: '#f5f5f5',
  padding: '1rem',
  paddingTop: '5rem',
  minWidth: '200px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
  borderRadius: '4px', // Added border radius
});

const CalendarContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Adjust the height as per your preference
  flex: 1, // Added flex 1 to fill the remaining space
});

const CalendarMonth = styled('h2')({
  marginBottom: '1rem',
});

const CalendarGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '1px',
  backgroundColor: '#eee',
  maxWidth: '9000px', // Adjust the width as per your preference
  minWidth: '80%',
  minHeight: '70vh',
  padding: '1rem', // Adjust the padding as per your preference
});

const CalendarCell = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '1rem',
  cursor: 'pointer',
  position: 'relative', // Added position relative
});

const DayNumber = styled('div')({
  position: 'absolute',
  top: '0.5rem',
  left: '0.5rem',
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
});

const getCurrentMonthCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const calendar = [];

  // Add day name cells at the top
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let i = 0; i < 7; i++) {
    calendar.push(<DayNameCell key={`day-name-${i}`}>{dayNames[i]}</DayNameCell>);
  }

  // Add empty cells for the days before the first day of the month
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    calendar.push(<CalendarCell key={`empty-${i}`} />);
  }

  // Add cells for each day in the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendar.push(
      <CalendarCell key={day}>
        <DayNumber>{day}</DayNumber>
      </CalendarCell>
    );
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
    'December',
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
      <Panel>
        <CurrentDayPanel />
      </Panel>
      <NavBar />
      <Calendar />
    </Root>
  );
};

const CurrentDayPanel = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <div>
      <Card>
        <CardTitle>Today</CardTitle>
        <CardContent>{`${month} ${day}, ${year}`}</CardContent>
      </Card>
    </div>
  );
};

const DayNameCell = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
  padding: '1rem',
  fontWeight: 'bold',
});

const Card = styled('div')({
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const CardTitle = styled('h3')({
  marginBottom: '0.5rem',
});

const CardContent = styled('p')({});

export default Home;
