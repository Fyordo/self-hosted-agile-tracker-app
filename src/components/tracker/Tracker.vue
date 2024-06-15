<template>
    <div class="tracker">
        <b>Current task:</b>
        <div v-if="this.timerEnabled">
            <div class="ticket-title"><i>{{ this.timeEntry.task.title }}</i></div>
        </div>
        <div v-else="this.timerEnabled">
            <div class="ticket-title">
                <UISelect
                @selected="this.taskSelected($event)"
                :options="taskOptions"
                />
            </div>
        </div>
        <UIInput
        class="ticket-description"
        v-model="this.timeEntry.description"
        />
        <div class="timer">{{ this.getTrackedTimeAsString() }}</div>

        <div v-if="this.timerEnabled">
            <UIButton
            @click="stopTimeEntry" 
            :title="'Stop'"
            />
        </div>
        <div v-else="this.timerEnabled">
            <UIButton
            @click="startTimeEntry"
            :title="'Start'"
            />
        </div>
    </div>
</template>

<script>
import UIInput from '@/components/UI/UIInput.vue';
import UISelect from '@/components/UI/UISelect.vue';
import UIButton from '@/components/UI/UIButton.vue';
import axiosAgregator from "@/server/axiosAgregator.js";

export default {
    created () {
        axiosAgregator.sendGet("/api/task?my=true").then((response) => {
            let responseData = response.data;
            this.taskOptions = responseData.data.map((elem) => {
                return {
                    value: elem.id,
                    text: elem.title
                }
            })
        })
        .catch(error => {
            this.timerEnabled = false;
            this.trackedTime = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
            this.timeEntry = {
                timeStart: "2024-01-03T00:01:00",
                timeEnd: Date.now().toString(),
                description: "",
                task: {
                    id: 0,
                    title: "No current task"
                }
            }
        });

        axiosAgregator.sendGet("/api/time-entry/current").then((response) => {
            let responseData = response.data;
            this.trackedTime = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
            this.timeEntry = {
                id: responseData.id,
                timeStart: responseData.timeStart,
                timeEnd: Date.now().toString(),
                description: responseData.description,
                task: {
                    id: responseData.task.id,
                    title: responseData.task.title
                }
            }
            this.convertDataToTrackedTime();
            this.getTrackedTimeAsString();
            this.enableTimer();
        })
        .catch(error => {
            this.timerEnabled = false;
            this.trackedTime = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
            this.timeEntry = {
                timeStart: "2024-01-03T00:01:00",
                timeEnd: Date.now().toString(),
                description: "",
                task: {
                    id: 0,
                    title: "No current task"
                }
            }
        });
        this.convertDataToTrackedTime();
    },
    methods: {
        stopTimeEntry(){
            axiosAgregator.sendPost("/api/time-entry/end/"+this.timeEntry.id).then((response) => {
            this.timerEnabled = false;
            this.trackedTime = {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
            this.timeEntry = {
                timeStart: "2024-01-03T00:01:00",
                timeEnd: Date.now().toString(),
                description: "",
                task: {
                    id: 0,
                    title: "No current task"
                }
            }
        })
        },
        startTimeEntry(){
            axiosAgregator.sendPost("/api/task/"+this.selectedTaskId+"/start-entry", {description: this.timeEntry.description})
            .then((response) => {
                let responseData = response.data;
                let now = Date.now().toString();
                this.timeEntry = {
                    id: responseData.id,
                    timeStart: now,
                    timeEnd: now,
                    description: responseData.description,
                    task: {
                        id: responseData.task.id,
                        title: responseData.task.title
                    }
                }
                this.trackedTime = {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
                this.timerEnabled = true;
            });
        },
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
            setInterval(() => {
                if (this.timerEnabled){
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
                }
            }, 1000);
        },
        taskSelected(selectedTaskId){
            this.selectedTaskId = selectedTaskId;
            console.log(this.selectedTaskId);
        }
    },
    data () {
        return {
            taskOptions: [],
            selectedTaskId: 0,
            timerEnabled: true,
            trackedTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            timeEntry: {
                id: 0,
                timeStart: "2024-01-03T00:01:00",
                timeEnd: Date.now().toString(),
                description: "Loading...",
                task: {
                    id: 0,
                    title: "Loading task..."
                }
            }
        }
    },
    components: {
        UIInput,
        UIButton,
        UISelect
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
    border-radius: 15px;
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