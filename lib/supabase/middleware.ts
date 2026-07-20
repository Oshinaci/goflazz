import { createServerSupabaseClient } from "./server";

export function getSupabase() {
  return createServerSupabaseClient();
}
