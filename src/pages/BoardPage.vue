<template>
    <div class="board">
      <Column v-for="column in columns"
      :key="column.id"
      :column="column"
      />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</template>

<script>
import Column from '@/components/board/Column.vue';
import axiosAgregator from "@/server/axiosAgregator.js";

export default {
    created () {
        this.loadColumns();
    },
    data () {
        return {
            columns: []
        }
    },
    methods: {
        loadColumns(){
            let projectId = localStorage.getItem("currentProjectId");
            axiosAgregator.sendGet("/api/project/"+projectId+"/columns").then((response) => {
                let responseData = response.data.data;
                this.columns = responseData.sort((a, b) => a.id - b.id);
            })
        }
    },
    components: {
        Column
    }
}
</script>

<style>
.board {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>