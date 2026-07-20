export interface Waitlist {
  id: string;
  name: string;
  email: string;
  referral_code: string | null;
  created_at: string;
}

export interface Profile {
  id: string;
  username: string;
  avatar_url: string | null;
}
