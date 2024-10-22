<template>
  <v-card v-if="logs.length">
    <v-card-text>
      <template v-for="(log, index) in logs" :key="index">
        <p>
          <span class="font-weight-bold">{{ log.person }}</span> <span class="text-caption text-medium-emphasis">[{{ log.date }}]:</span> {{ log.text }}
        </p>
      </template>
    </v-card-text>
  </v-card>
</template>

<script setup>
const chatStore = useChatStore()

const logs = computed(() => chatStore.chat.log)
</script>