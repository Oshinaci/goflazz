export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          name: string;
          email: string;
          referral_code: string | null;
          created_at: string;
        };

        Insert: {
          name: string;
          email: string;
          referral_code?: string | null;
        };

        Update: {
          name?: string;
          email?: string;
          referral_code?: string | null;
        };
      };
    };
  };
}
