<template>
    <Board
    :columns="this.columns"
    />
</template>

<script>
import Board from '@/components/board/Board.vue';
import axiosAgregator from "@/server/axiosAgregator.js";
export default {
    created () {
        this.loadColumns();
    },
    data () {
        return {
            columns: [
            {
                id: 1,
                name: 'To Do',
                tasks: [
                { id: 1, name: 'Task 1' },
                { id: 2, name: 'Task 2' }
                ]
            },
            {
                id: 2,
                name: 'In Progress',
                tasks: [
                { id: 3, name: 'Task 3' }
                ]
            },
            {
                id: 3,
                name: 'Done',
                tasks: [
                { id: 4, name: 'Task 4' }
                ]
            }
            ]
        }
    },
    methods: {
        loadColumns(){
            let projectId = localStorage.getItem("currentProjectId");
            new Promise((resolve, reject) => {
                axiosAgregator.sendGet("/api/project/"+projectId+"/columns").then((response) => {
                    let responseData = response.data.data;
                    let columns = responseData.map((column) => {
                        return {
                            id: column.id,
                            name: column.title
                        }

                    }).sort((a, b) => a.id - b.id);

                    resolve(columns);
                })
                .catch(error => {
                    reject(error);
                })
            }).then((columns => {
                this.columns = columns;
                for (let i = 0; i < this.columns.length; i++){
                    let column = this.columns[i];
                    new Promise((res, rej) => {
                        axiosAgregator.sendGet("/api/column/"+column.id+"/tasks")
                        .then((response) => {
                            res(response.data.data);
                            
                        })
                        .catch(error => {
                            rej(error);
                        })
                    }).then((tasksOfColumn) => {
                        console.log(tasksOfColumn);
                        this.columns[i].tasks = tasksOfColumn;
                    })
                }
                
            }));
            
        }
    },
    components: {
        Board
    }
}
</script>

<style>

</style>