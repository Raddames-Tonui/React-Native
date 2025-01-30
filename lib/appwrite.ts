import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import { openAuthSessionAsync } from "expo-web-browser";

import * as Linking from "expo-linking";

export const config = {
  Platform: "com.BigHammer.AoraEstates",
  endpoint: process.env.REACT_APP_ENDPOINT,
  projectId: process.env.REACT_PUCLIC_PRJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.Platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!response) throw new Error("Failed to login!");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    if (browserResult.type !== "success") throw new Error("Failed to login!");
  } catch (error) {
    console.log(error);
    return false;
  }
}
