<template>
    <div class="week-container">
        <div v-for="(day, index) in days" :key="index" class="day-column">
            <div class="column-header">
                {{ day.date }}
                <br>
                {{ day.dayName }}
                <br>
                {{ day.totalHours }} ч
            </div>
            <div class="time-entries">
                <div v-for="(entry, entryIndex) in day.timeEntries" :key="entryIndex" class="time-entry">
                <div class="entry-rectangle" :style="calculateRectangleStyle(entry)">
                    <div class="entry-title">{{ entry.task.title }}</div>
                    <div class="entry-description">{{ entry.description }}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        days: [],
      };
    },
    mounted() {
      this.initializeDays();
    },
    methods: {
      initializeDays() {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
        for (let i = 0; i < 7; i++) {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i);
          const dayName = this.getDayName(date.getDay());
          const timeEntries = this.generateTimeEntries(date);
          const totalHours = this.calculateTotalHours(timeEntries);
        this.days.push({ date: this.formatDate(date), dayName, timeEntries, totalHours });
        }
      },
      getDayName(dayIndex) {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return daysOfWeek[dayIndex];
      },
      formatDate(date) {
        const options = { weekday: 'long', day: 'numeric' };
        return date.toLocaleDateString('ru-RU', options);
      },
      generateTimeEntries(date) {
        // Здесь вы можете создать список time-entry для текущего дня
        // В данном примере я создаю случайные time-entry для иллюстрации
        const entries = [];
        for (let i = 0; i < 5; i++) {
          const startTime = new Date(date);
          startTime.setHours(8 + i, 0, 0);
          const endTime = new Date(startTime);
          endTime.setHours(9 + i, 0, 0);
  
          entries.push({
            timeStart: startTime,
            timeEnd: endTime,
            description: `Описание ${i + 1}`,
            task: { title: `Задача ${i + 1}` },
          });
        }
        return entries;
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
  background: linear-gradient(to bottom, #55B78E, #367459);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  }
  
  .entry-title {
    font-size: 16px;
    font-weight: bold;
  }
  
  .entry-description {
    font-size: 12px;
  }
  
  </style>
  