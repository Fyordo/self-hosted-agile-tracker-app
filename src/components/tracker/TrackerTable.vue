<template>
    <div class="week-container">
        <div v-for="(day, index) in days" :key="index" class="day-column">
            <div class="column-header" :style="calculateToday(day.today)">
                {{ day.date }}
                <br>
                {{ day.dayName }}
                <br>
                {{ day.totalHours }} h
            </div>
            <div class="time-entries">
                <div v-for="(entry, entryIndex) in day.timeEntries" :key="entryIndex" class="time-entry">
                <div class="entry-rectangle" :style="calculateRectangleStyle(entry)">
                    <div class="entry-title">{{ entry.task.title }}</div>
                    <div class="entry-description">{{ entry.description }}</div>
                </div>
                </div>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
  </template>
  
  <script>
import axiosAgregator from "@/server/axiosAgregator.js";
  export default {
    data() {
      return {
        days: [],
        timeEntries: []
      };
    },
    mounted() {
      this.initializeDays();
    },
    methods: {
      calculateToday(isToday){
        if (isToday){
          return "color: #5cdb95";
        }
      },
      initializeDays() {

        axiosAgregator.sendGet("/api/time-entry").then((response) => {
          let entriesArray = response.data.data;
          const timeEntriesAll = entriesArray.map((elem) => {
            return {
              timeStart: new Date(elem.timeStart),
              timeEnd: new Date(elem.timeEnd),
              description: elem.description,
              task: elem.task,
            };
          });

          const startDate = new Date();
          startDate.setDate(startDate.getDate() - (startDate.getDay()+7) + 1);
          for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const dayName = this.getDayName(date.getDay());
            const timeEntries = timeEntriesAll.filter((elem) => {
              return (new Date(elem.timeStart)).getDate() == date.getDate();
            });
            console.log(timeEntries)
            const totalHours = this.calculateTotalHours(timeEntries);
            const today = date.getDay() === new Date().getDay();
            this.days.push({ date: this.formatDate(date), dayName, timeEntries, totalHours, today });
          }
        })
        
      },
      getDayName(dayIndex) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'];
        return daysOfWeek[dayIndex];
      },
      formatDate(date) {
        const options = { weekday: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-EN', options);
      },
      calculateRectangleStyle(entry) {
        // Пример логики: просто для иллюстрации
        const startHour = entry.timeStart.getHours();
        const endHour = entry.timeEnd.getHours();
        const height = (endHour - startHour) * 60; // высота в минутах
  
        return {
          top: `${(startHour) * 60}px`, // начальное положение относительно 8 утра
          height: `${height}px`,
        };
      },
      calculateTotalHours(entries) {
        return entries.reduce((total, entry) => {
            const startHour = entry.timeStart.getHours();
            const endHour = entry.timeEnd.getHours();
            return total + (endHour - startHour);
        }, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .week-container {
    display: flex;
    margin-bottom: 10px;
  }
  
  .day-column {
    flex: 1;
    padding: 10px;
    max-width: 13%;
  }
  
  .column-header {
    text-align: center;
    font-weight: bold;
  }
  
  .time-entries {
    margin-top: 10px;
    margin-bottom: 800px;
  }
  
  .time-entry {
    margin-bottom: 10px;
  }
  
  .entry-rectangle {
    background: #5cdb95;
    border: 0;
    color: black;
    padding: 5px;
    border-radius: 5px;
    position: relative;
  }
  
  .entry-title {
    font-size: 16px;
    font-weight: bold;
    max-height: 20%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .entry-description {
    font-size: 12px;
    max-height: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  </style>
  