/**
 * Data Model Interfaces
 */

 import { Profile } from "./profile.interface";
 import { Profiles } from "./profiles.interface";
/**
 * In-Memory Store
 */
let profiles: Profiles = {
    1: {
        id: 1,
        name: "Twitter",
        image: "https://github.com/Flolight.png"
    }
}

/**
 * Service Methods
 */

 export const findAll = async (): Promise<Profile[]> => Object.values(profiles);

 export const find = async (id: number): Promise<Profile> => profiles[id];