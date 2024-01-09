<template>
    <div>
        <div class="row-widget-container">
            <TimeWidget
            :text="'Сегодня'"
            :time="{hours:this.todayTime.hours, minutes:this.todayTime.minutes, seconds:this.todayTime.seconds}"
            @click="toReportsPage(null, null)"
            />
            <CurrentTaskWidget
            :project="this.currentTask.project"
            :trackedTask="this.currentTask.trackedTask"
            />
        </div>
    </div>
</template>

<script>
import TimeWidget from "@/components/dashboard/TimeWidget.vue";
import CurrentTaskWidget from "@/components/dashboard/CurrentTaskWidget.vue";
import UIButton from "@/components/UI/UIButton.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";
export default {
    data () {
        return {
            todayTime: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            currentTask: {
                project: {
                    id: 1,
                    title: "Загрузка..."
                },
                trackedTask: {
                    timeStart: '2024-01-01T00:00:00',
                    task: {
                        id: 1,
                        title: 'Загрузка...'
                    }
                }
            }
        }
    },
    methods: {
        toReportsPage: function (time_from, time_to){
            if (time_from !== null && time_to !== null){
                router.push('/reports?timeFrom=' + time_from + '&timeTo=' + time_to);
            }
            router.push('/reports');
        },
    },
    components: {
        UIButton,
        CurrentTaskWidget,
        TimeWidget
    }
    
}
</script>

<style>
.row-widget-container{
    display: flex;
    padding: 1%;
    justify-content: space-around;
}
</style>