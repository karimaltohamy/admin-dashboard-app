import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme/theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvens, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${selected.title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subTitle="Full Calendar Interative Page" />

      <Box display="flex" gap="20px">
        <Box flex="1 1 20%" p="10px 15px" backgroundColor={colors.primary[400]}>
          <List>
            <Typography variant="h4" mb="15px" color={colors.grey[100]}>
              Events
            </Typography>
            {currentEvens.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  padding: "10px",
                  borderRadius: "5px",
                  m: "10px 0",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        month: "short",
                        year: "numeric",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 80%">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              listPlugin,
              timeGridPlugin,
              InteractionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,dayGridMonth,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            selectable={true}
            selectMirror={true}
            editable={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              { id: "123", title: "allday", date: "2022-10-30" },
              { id: "321", title: "event", date: "2022-10-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
