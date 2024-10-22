<template>
  <v-dialog
    transition="dialog-bottom-transition"
    width="auto"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="primary" prepend-icon="mdi-rocket-launch">
        Comenzar
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        max-width="500"
        min-width="400"
        prepend-icon="mdi-chat-outline"
        title="Nuevo Chat"
      >
        <v-form validate-on="submit lazy" @submit.prevent="submit">
          <v-card-text>
            <v-text-field v-model="firstPersonName" :rules label="Nombre persona 1" variant="underlined"></v-text-field>
            <v-text-field v-model="secondPersonName" :rules label="Nombre persona 2" variant="underlined"></v-text-field>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              text="Cancelar"
              @click="isActive.value = false"
            ></v-btn>
            <v-btn
              color="primary"
              text="Iniciar Chat"
              variant="flat"
              type="submit"
            ></v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const chatStore = useChatStore()
const firstPersonName = ref('')
const secondPersonName = ref('')
const rules =ref([
  value => {
    if (value) return true
    return 'Debes ingresar un nombre'
  },
])

async function submit(event) {
  const res = await event
  if(res.valid) {
    const isExistsChat = chatStore.findChat(firstPersonName.value, secondPersonName.value)
    if(!isExistsChat) {
      chatStore.addNewChat(firstPersonName.value, secondPersonName.value)
    }
    await navigateTo({
      path: '/chat',
      query: {
        person1: firstPersonName.value,
        person2: secondPersonName.value
      }
    })
  }
}
</script>
