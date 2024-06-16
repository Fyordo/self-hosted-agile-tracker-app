<template>
  <footer class="footer">
    <p>
      Current project:
      <b
        ><u>{{ this.currentProject }}</u></b
      >
      <UIButton @click="changeProject" :title="'Change Project'" />
    </p>
    <ModalWindow
      :isVisible="isModalVisible"
      @update:isVisible="isModalVisible = $event"
      @changeProject="updateProject()"
      @projectSelected="handleProjectSelected"
    />
  </footer>
</template>

<script>
import UIButton from "@/components/UI/UIButton.vue";
import ModalWindow from "@/components/footer/ProjectSelectModal.vue";
import axiosAgregator from "@/server/axiosAgregator.js";

export default {
  created() {
    let currentProjectId = localStorage.getItem("currentProjectId");
    if (currentProjectId) {
      axiosAgregator
        .sendGet("/api/project/" + currentProjectId)
        .then((response) => {
          this.currentProject = response.data.title;
        });
    }
  },
  data() {
    return {
      currentProject: "<NOT_SELECTED>",
      isModalVisible: false,
    };
  },
  methods: {
    updateProject() {
      let currentProjectId = localStorage.getItem("currentProjectId");
      if (currentProjectId) {
        axiosAgregator
          .sendGet("/api/project/" + currentProjectId)
          .then((response) => {
            this.currentProject = response.data.title;
          });
      }
    },
    changeProject() {
      this.isModalVisible = true;
    },
    handleProjectSelected(project) {
      console.log("Selected Project:", project);
      this.isModalVisible = false;
    },
  },
  components: {
    UIButton,
    ModalWindow,
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #edf5e1;
  color: #05386b;
  text-align: center;
  padding: 10px 0;
}

.footer p {
  margin: 0;
  font-size: 20px;
}
</style>
