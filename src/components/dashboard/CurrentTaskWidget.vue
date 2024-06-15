<template>
    <div class="current-task">
        <div
            class="current-task-title"
            @click="toTaskPage(this.trackedTask.task.id)"
        >
            <b>{{ this.trackedTask.task.title }}</b>
        </div>
        <div class="current-task-info">
            <div
                class="current-task-project"
                @click="toProjectPage(this.project.id)"
            >
                Project: {{ this.project.title }}
            </div>
            <div
                class="current-task-info-separator"
                @click="toTrackerPage"
            />
            <div class="current-task-time" @click="toTrackerPage">
                {{ this.getTrackedTimeAsString() }}
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router/router.js";
export default {
    mounted() {
        this.convertDataToTrackedTime();
        this.getTrackedTimeAsString();
        this.enableTimer();
    },
    methods: {
        toProjectPage: function (projectId) {
            router.push("/board?projectId=" + projectId);
        },
        toTaskPage: function (taskId) {
            router.push("/board?taskId=" + taskId);
        },
        toTrackerPage: function () {
            router.push("/tracker");
        },
        convertDataToTrackedTime() {
            if (this.trackedTask === null){
                this.trackedTime = {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
            }
            var startTime = new Date(this.trackedTask.timeStart);
            var endTime = new Date();

            // Вычисление разницы в миллисекундах
            var timeDiff = endTime - startTime;

            // Вычисление часов, минут и секунд
            var hours = Math.floor(timeDiff / (1000 * 60 * 60));
            var minutes = Math.floor(
                (timeDiff % (1000 * 60 * 60)) / (1000 * 60),
            );
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            this.trackedTime = {
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            };
        },
        getTrackedTimeAsString() {
            var formattedHours =
                this.trackedTime.hours < 10
                    ? "0" + this.trackedTime.hours
                    : this.trackedTime.hours;
            var formattedMinutes =
                this.trackedTime.minutes < 10
                    ? "0" + this.trackedTime.minutes
                    : this.trackedTime.minutes;
            var formattedSeconds =
                this.trackedTime.seconds < 10
                    ? "0" + this.trackedTime.seconds
                    : this.trackedTime.seconds;

            return (
                formattedHours + ":" + formattedMinutes + ":" + formattedSeconds
            );
        },
        enableTimer() {
            setInterval(() => {
                this.getTrackedTimeAsString();
                this.trackedTime.seconds++;
                if (this.trackedTime.seconds === 60) {
                    this.trackedTime.seconds = 0;
                    this.trackedTime.minutes++;
                }
                if (this.trackedTime.minutes === 60) {
                    this.trackedTime.minutes = 0;
                    this.trackedTime.hours++;
                }
            }, 1000);
        },
    },
    props: {
        project: {
            type: Object,
            required: true,
        },
        trackedTask: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            trackedTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        };
    },
};
</script>

<style scoped>
.current-task {
    background-color: rgb(230, 230, 230);
    width: 50%;
    height: 125px;
    border-radius: 10px;
    margin-left: 10px;
}

.current-task:hover {
    background-color: rgb(210, 210, 210);
}

.current-task-title {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    font-size: 250%;
    color: rgb(230, 230, 230);
    background-color: #05386b;
}

.current-task-title:hover {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    font-size: 250%;
    color: rgb(230, 230, 230);
    background-color: #05386b;
}

.current-task-info {
    display: flex;
    justify-content: space-between;
}

.current-task-info-separator {
    min-width: 300px;
}

.current-task-project {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-left: 10px;
    display: flex;
    font-size: 200%;
    color: #05386b;
    justify-content: flex-start;
}

.current-task-project:hover {
    color: white;
}

.current-task-time {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-right: 10px;
    display: flex;
    font-size: 200%;
    color: #05386b;
    justify-content: flex-end;
}
</style>
