//Interact with your database through the Supabase client libraries with your API keys.
import {createClient} from '@supabase/supabase-js'

const supabase_URL = createClient('https://tkbffczhgegnzrwozijy.supabase.co', process.env.SUPABASE_KEY);