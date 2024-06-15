<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <UIButton 
                v-for="(project) in projects"
                :title="project.title" 
                @click="selectProject(project)"
            />
            <br>
            <UIButton 
                :title="'Close'" 
                @click="closeModal()"
            />
        </div>
    </div>
</template>

<script>
import UIButton from "@/components/UI/UIButton.vue";
import axiosAgregator from "@/server/axiosAgregator.js";

export default {
    created () {
        axiosAgregator.sendGet("/api/project").then((response) => {
            this.projects = response.data.data.map((elem) => {
                return {
                    id: elem.id,
                    title: elem.title
                }
            })
        });
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            projects: []
        };
    },
    methods: {
        closeModal() {
            this.$emit('update:isVisible', false);
        },
        selectProject(project) {
            localStorage.setItem("currentProjectId", project.id);
            this.closeModal();
            this.$emit('changeProject', project.id);
        }
    },
    components: {
        UIButton
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.631);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    display: flex;
    flex-direction: column;
    background: #EDF5E1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 40%;
    width: 70%;
}
</style>
