import { createClient } from "redis";
import { createSignedUrl } from "./supabase";

const redisUrl =
  process.env.NODE_ENV === "development"
    ? process.env.RENDER_REDIS_EXTERNAL_URL
    : process.env.RENDER_REDIS_URL;

const client = createClient({
  url: redisUrl,
});

(async () => {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
})();

// // Save the URL to Redis
export async function saveFileUrlToRedis(key, fileUrl) {
  try {
    //Attempt to set the value in Redis
    await client.set(key, fileUrl);
    console.log(`Successfully saved URL for key ${key} to Redis.`);
  } catch (error) {
    //Log the error and throw a new error
    console.error(`Error saving URL to Redis for key ${key}:`, error);
    throw new Error("Failed to save URL to Redis");
  }
}
export async function getValueFromCache(key) {
  try {
    //Check if the key exists
    const exists = await client.exists(key);

    if (exists) {
      console.log("******THE FILE EXISTS IN REDIS*******");
      const value = await client.get(key);

      const urlCache = await createSignedUrl("llearning_bucket", value, 200);

      return { exists: true, value, urlCache };
    } else {
      // If the key does not exist
      console.log("******THE FILE DOES NOT EXIST IN REDIS*******");
      return { exists: false, value: null };
    }
  } catch (error) {
    console.error("Error checking Redis cache:", error);
    throw error;
  }
}
