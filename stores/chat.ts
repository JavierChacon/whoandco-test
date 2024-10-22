export const useChatStore = defineStore('chatStore', {
  state: () => ({
    chat: {
      id: '',
      person1: '',
      person2: '',
      log: [] as { person: string, date: string, text: string }[]
    } as Chat,
    chats: [] as Chat[],
  }),
  actions: {
    addLog(person: string, date: string, text: string) {
      this.chat.log.unshift({ person, date, text })
    },
    addNewChat(person1: string, person2: string) {
      this.chat.id = `${person1}_${person2}`
      this.chat.person1 = person1
      this.chat.person2 = person2
      this.chat.log = []
      this.chats.push({ ...this.chat})
    },
    findChat(person1: string, person2: string) {
      const id = `${person1}_${person2}`
      const chat = this.chats.find(c => c.id === id)
      if(chat) {
        this.chat = chat
        return true
      } else {
        return false
      }
    }
  }
})

interface Chat {
  id: string
  person1: string
  person2: string
  log: { person: string, date: string, text: string }[]
}