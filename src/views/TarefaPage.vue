<template>
 
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>
 
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tarefas</ion-title>
        </ion-toolbar>
      </ion-header>
 
 
     <ion-input label="Digite a Tarefa"  v-model="tarefa">
 
     </ion-input>
 
    <ion-button  @click="AdicionarTarefa()">
      <ion-icon :icon="addOutline"></ion-icon>
    </ion-button>
     
 
 
    <ion-list>
      <ion-item v-for="(t, index) in tarefas" :key="index">
        {{ t }}
 
         <ion-button slot="end" color="danger"  @click="apagarTarefa(index)"> 
          <ion-icon :icon="trashOutline"></ion-icon>
         </ion-button>
      </ion-item>
    </ion-list>

    <ion-button @click="router.push('/tarefa')">ir para home</ion-button>
 
     <p v-if="tarefas.length === 0"> Sem tarefas no momento!</p>
 
 </ion-content>
 </ion-page>
</template>
 
<script setup lang="ts">
import { addOutline, trashOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonList, IonItem, IonIcon} from '@ionic/vue';
import router from '@/router';
 
import { ref } from 'vue'
const tarefa = ref("")
const tarefas = ref<string[]>([])
 
 
function apagarTarefa(index:number) {
  tarefas.value.splice(index, 1)
}
 
function AdicionarTarefa() {
  if (tarefa.value.trim() === "") return
 
  tarefas.value.push(tarefa.value)
  tarefa.value = ""
}
 
 
 
 
</script>
 
<style scoped >
 
</style>