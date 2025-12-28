'use server'

export async function join(formData: FormData) {
  const playerId = formData.get('playerId')
  if (typeof playerId !== 'string') return

  // lógica mínima (por ahora)
  console.log('JOIN:', playerId)
}
