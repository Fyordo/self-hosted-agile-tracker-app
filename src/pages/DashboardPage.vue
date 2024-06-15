<template>
    <div>
        <div class="row-widget-container">
            <TimeWidget
                :text="'Today'"
                :time="this.todayTime"
                @click="toReportsPage(null, null)"
            />
            <CountTasksWidget
                :text="'Count My Tasks'"
                :countTasks="this.countTasks"
                @click="toReportsPage(null, null)"
            />
            <CurrentTaskWidget
                :project="this.currentTask.project"
                :trackedTask="this.currentTask.trackedTask"
            />
        </div>
        <div class="row-widget-container">
            <MonthGraph/>
        </div>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import TimeWidget from "@/components/dashboard/TimeWidget.vue";
import CountTasksWidget from "@/components/dashboard/CountTasksWidget.vue";
import MonthGraph from "@/components/dashboard/MonthGraph.vue";
import CurrentTaskWidget from "@/components/dashboard/CurrentTaskWidget.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";
export default {
    created () {
        axiosAgregator.sendGet("/api/dashboard").then((response) => {
            this.todayTime = response.data.todayTime;
            this.countTasks = response.data.countTasks;
            this.currentTask = response.data.currentTask;
        })
    },
    data() {
        return {
            todayTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            countTasks: 0,
            currentTask: {
                project: {
                    id: 1,
                    title: "Loading...",
                },
                trackedTask: {
                    timeStart: "2024-01-01T00:00:00",
                    task: {
                        id: 1,
                        title: "Loading...",
                    },
                },
            },
            graph: []
        };
    },
    methods: {
        toReportsPage: function (time_from, time_to) {
            if (time_from !== null && time_to !== null) {
                router.push(
                    "/reports?timeFrom=" + time_from + "&timeTo=" + time_to,
                );
            }
            router.push("/reports");
        },
    },
    components: {
        CurrentTaskWidget,
        TimeWidget,
        MonthGraph,
        CountTasksWidget
    },
};
</script>

<style>
.row-widget-container {
    display: flex;
    padding: 1%;
    justify-content: space-around;
}
</style>
