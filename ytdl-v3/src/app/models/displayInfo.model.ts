import { AvailableRes } from './availableRes.model';
export interface DisplayInfo{
    thumbnailUrl?:string;
    title?:string;
    link?:string;
    isPlaylist?:Boolean;
    isListAndVideo?:Boolean;
    downloadDirectory?:string;
    availableRes?:AvailableRes[];
}