import { ChatLine, Room, RoomConfig } from './logic/room';
import { GameServerRequest } from '../game/server.request';
import { ClientGame } from '../game/logic/client-game';


export enum RoomRequestType {
  CHANGE_SETTINGS = "setting",
  CONNECT = "connect",
  DISCONNECT = "disconnect",
  READY = "ready",
  UNREADY = "unready",
  START = "start",
  GAME = "game",
  CHAT = "chat",
  GET_STATE = "get_state",
  GET_GAME_STATE = "get_game_state"
}

export interface RoomServerRequest {

  type: RoomRequestType;

}

export interface ChangeSettingsRequest extends RoomServerRequest {

  type: RoomRequestType.CHANGE_SETTINGS;

  config: RoomConfig;

}

export interface PlayerConnectRequest extends RoomServerRequest {

  type: RoomRequestType.CONNECT;

  player: string;

}

export interface PlayerDisconnectRequest extends RoomServerRequest {

  type: RoomRequestType.DISCONNECT;

  player: string;

}

export interface PlayerReadyRequest extends RoomServerRequest {

  type: RoomRequestType.READY;

  player: string;

}

export interface PlayerUnreadyRequest extends RoomServerRequest {

  type: RoomRequestType.UNREADY;

  player: string;

}

export interface GameStartRequest extends RoomServerRequest {

  type: RoomRequestType.START;

}

export interface GameRequest extends RoomServerRequest {

  type: RoomRequestType.GAME;

  request: GameServerRequest;

}

export interface ChatRequest extends RoomServerRequest {

  type: RoomRequestType.CHAT;

  msg: ChatLine;

}

export interface GetStateRequest extends RoomServerRequest {

  type: RoomRequestType.GET_STATE;

}

export interface GetStateResponse {

  room: Omit<Room, 'playerReady' | 'handleEvent'> & { playerReady: { [key: string]: boolean } };

  game: ClientGame;

}

export interface GetGameStateRequest extends RoomServerRequest {

  type: RoomRequestType.GET_GAME_STATE;

}
export interface GetGameStateResponse {

  type: RoomRequestType.GET_GAME_STATE,

  game: ClientGame;


}
