<template>
    <div class="task">
        <div class="task-header">
            <div class="task-title">{{ task.title }}</div>
            <div
                class="task-type"
                :style="{ backgroundColor: task.taskType.color }"
            >
                {{ task.taskType.title }}
            </div>
        </div>
        <div class="task-deadline">
            Deadline:
            {{
                new Date(task.deadline).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })
            }}
        </div>
        <div class="bottom-part">
            <div class="task-responsible">
                <img
                    :src="task.maintainer.avatar"
                    alt="Avatar"
                    class="avatar"
                />
                <span>{{ task.maintainer.username }}</span>
            </div>
            <UIButton :title="'Start'" @click="startTimeEntry()" />
        </div>
    </div>
</template>

<script>
import UIButton from "../UI/UIButton.vue";
import axiosAgregator from "@/server/axiosAgregator.js";
import router from "@/router/router.js";

export default {
    methods: {
        startTimeEntry() {
            axiosAgregator
                .sendPost("/api/task/" + this.task.id + "/start-entry", {
                    description: "",
                })
                .then((response) => {
                    router.push("/tracker");
                });
        },
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    components: {
        UIButton,
    },
};
</script>

<style scoped>
.bottom-part {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.task {
    background-color: #05386b;
    color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 15px;
    transition-duration: 0.5s;
}

.task:hover {
    background-color: #04213e;
    color: white;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-title {
    font-size: 1.2em;
    font-weight: bold;
}

.task-type {
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
}

.task-deadline {
    margin-top: 5px;
}

.task-responsible {
    display: flex;
    align-items: center;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
