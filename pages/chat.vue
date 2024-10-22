<template>
  <section>
    <v-card>
      <v-list-item class="px-6" height="88">
        <template v-slot:prepend>
          <v-icon icon="mdi-chat"></v-icon>
        </template>

        <template v-slot:title>Registro del Chat</template>

        <template v-slot:append>
          <v-btn
            color="primary"
            variant="tonal"
            text="volver"
            to="/"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <CardChat :name="person1" />
            </v-col>
            <v-col cols="12" sm="6">
              <CardChat :name="person2" />
            </v-col>
          </v-row>
          <ChatLog  class="mt-4" />
        </v-container>
      </v-card-text>
    </v-card>
  </section>
</template>

<script setup>
import CardChat from '~/components/CardChat.vue'
import ChatLog from '~/components/ChatLog.vue'

const route = useRoute()
const person1 = route.query.person1
const person2 = route.query.person2
</script>
