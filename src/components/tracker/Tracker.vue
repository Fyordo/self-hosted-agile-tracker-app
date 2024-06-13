<template>
    <div class="tracker">
       <div class="ticket-title">{{ this.timeEntry.task.title }}</div>
       <UIInput
       class="ticket-description"
       v-model="this.timeEntry.description"
       />
       <div class="timer">{{ this.getTrackedTimeAsString() }}</div>
    </div>
</template>

<script>
import UIInput from '@/components/UI/UIInput.vue';

export default {
    mounted () {
        this.convertDataToTrackedTime();
        this.getTrackedTimeAsString();
        this.enableTimer();
    },
    methods: {
        convertDataToTrackedTime () {
            if (this.timeEntry === null){
                this.trackedTime = {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
                this.timerEnabled = false;
            }
            var startTime = new Date(this.timeEntry.timeStart);
            var endTime = new Date();

            // Вычисление разницы в миллисекундах
            var timeDiff = endTime - startTime;

            // Вычисление часов, минут и секунд
            var hours = Math.floor(timeDiff / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            this.trackedTime = {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        },
        getTrackedTimeAsString() {
            var formattedHours = this.trackedTime.hours < 10 ? "0" + this.trackedTime.hours : this.trackedTime.hours;
            var formattedMinutes = this.trackedTime.minutes < 10 ? "0" + this.trackedTime.minutes : this.trackedTime.minutes;
            var formattedSeconds = this.trackedTime.seconds < 10 ? "0" + this.trackedTime.seconds : this.trackedTime.seconds;

            return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
        },
        enableTimer() {
            if (this.timerEnabled){
                setInterval(() => {
                    this.getTrackedTimeAsString();
                    this.trackedTime.seconds++;
                    if (this.trackedTime.seconds === 60){
                        this.trackedTime.seconds = 0;
                        this.trackedTime.minutes++;
                    }
                    if (this.trackedTime.minutes === 60){
                        this.trackedTime.minutes = 0;
                        this.trackedTime.hours++;
                    }
                }, 1000);
            }
        }
    },
    data () {
        return {
            timerEnabled: true,
            trackedTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            timeEntry: {
                timeStart: "2024-01-03T00:01:00",
                timeEnd: Date.now().toString(),
                description: "Очень длинное time-entry с названием тикета аааа бляяя",
                task: {
                    id: 0,
                    title: "Реализовать дашборд"
                }
            }
        }
    },
    components: {
        UIInput
    }
}
</script>

<style scoped>
.tracker {
    background-color: #367459;
    height: 4rem;
    color: white;
    align-content: center;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.ticket-description {
    margin-right: 20px;
    font-size: 25px;
    width: 100rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.ticket-title {
    margin-right: 20px;
    font-size: 18px;
    width: 20rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.timer {
    margin-right: 20px;
    margin-left: 10px;
    font-size: 30px;
}
</style>