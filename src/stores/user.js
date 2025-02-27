import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('CurrentUserNameAsDefaultFromStore')
  const email = ref('current.email.as.default.from.store@pinia.vue') 

  const user = computed(() => ({ username: username.value, email: email.value }))

  function setUsername(newUsername) { username.value = newUsername }
  function setEmail(newEmail) { email.value = newEmail}
  return { username, email, user, setUsername, setEmail }
}, {persist: true})
