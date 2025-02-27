import ConsoleMessagePacket from '../../../packets/ConsoleMessagePacket';
import Player from '../../Player';

export default function (player: Player, packet: ConsoleMessagePacket): void {
  if (!player.role.console) return;
  player.commandHandler.handle(packet.data.message);
}
