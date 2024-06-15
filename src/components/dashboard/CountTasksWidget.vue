<template>
    <div class="count-tasks-widget">
        <div class="count-tasks-widget-text">
            <b>{{ this.text }}</b>
        </div>
        <div class="count-tasks-widget-time">
            {{ this.countTasks }}
        </div>
    </div>
</template>

<script>
import router from "@/router/router.js";
export default {
    methods: {
    },
    props: {
        countTasks: {
            type: Number,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.count-tasks-widget {
    background-color: rgb(230, 230, 230);
    width: 20%;
    height: 125px;
    border-radius: 10px;
}

.count-tasks-widget:hover {
    background-color: rgb(210, 210, 210);
}

.count-tasks-widget-text {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 250%;
    color: white;
    background-color: #05386b;
}

.count-tasks-widget-time {
    border-radius: 10px 10px 0px 0px;
    padding-top: 10px;
    padding-right: 10px;
    display: flex;
    font-size: 200%;
    color: #05386b;
    justify-content: flex-end;
}
</style>
