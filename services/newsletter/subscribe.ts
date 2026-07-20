import { supabase } from "@/lib/supabase/client";

export async function subscribeNewsletter(email: string) {
  // Cek apakah email sudah terdaftar
  const { data: existing } = await supabase
    .from("newsletter")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) {
    return {
      data: null,
      error: {
        message: "This email is already subscribed.",
      },
    };
  }

  // Simpan email baru
  const { data, error } = await supabase
    .from("newsletter")
    .insert([
      {
        email,
      },
    ])
    .select();

  return {
    data,
    error,
  };
}
