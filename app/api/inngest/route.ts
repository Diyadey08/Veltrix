import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { AiCareerAgent, helloWorld } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    
    AiCareerAgent // <-- This is where you'll always add all your functions
/* your functions will be passed here later! */
  ],
});
