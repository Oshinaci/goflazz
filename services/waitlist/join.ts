import { supabase } from "@/lib/supabase/client";

export async function joinWaitlist(
  name: string,
  email: string
) {
  const { data, error } = await supabase
    .from("waitlist")
    .insert([
      {
        name,
        email,
      },
    ]);

  return {
    data,
    error,
  };
}
