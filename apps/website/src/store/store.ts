// Local Storage Stores ---
import type {Writable} from "svelte/store";
import {localStorageStore} from "@skeletonlabs/skeleton";

export const posterStore: Writable<string[]|null> = localStorageStore('posterUrls', null);