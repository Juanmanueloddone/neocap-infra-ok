import { initialGameState, GameState } from "./gameState";
import { loadGameState, saveGameState } from "./persist";

let state: GameState = initialGameState;
let initialized = false;

/**
 * Inicializa el store una sola vez.
 * - Si hay estado persistido en Supabase → lo carga
 * - Si no hay → usa initialGameState
 */
export async function initStore() {
  if (initialized) return;

  const persisted = await loadGameState();
  state = persisted ?? initialGameState;

  initialized = true;
}

/**
 * Devuelve el estado actual.
 * Asume que initStore() ya fue llamado.
 */
export function getState(): GameState {
  return state;
}

/**
 * Reemplaza el estado completo y lo persiste.
 */
export async function setState(next: GameState) {
  state = next;
  await saveGameState(state);
}
