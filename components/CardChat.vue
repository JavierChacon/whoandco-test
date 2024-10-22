<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-card-text>
        <v-text-field v-model="text" :rules variant="outlined"></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
          color="primary"
          text="enviar"
          variant="flat"
          type="submit"
        ></v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script setup>
const chatStore = useChatStore()

const props = defineProps(['name'])
const text = ref('')

const rules =ref([
  value => {
    if (value) return true
    return 'Debes ingresar un mensaje'
  },
])

async function submit(event) {
  const res = await event
  if(res.valid) {
    const date = new Date()
    chatStore.addLog(props.name, date.toLocaleString('es'), text.value)
    text.value = ''
  }
}
</script>