import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChatModuleBase } from "./base/chat.module.base";
import { ChatService } from "./chat.service";
import { ChatResolver } from "./chat.resolver";

@Module({
  imports: [
    ChatModuleBase,
    forwardRef(() => AuthModule),
    forwardRef(() => AuthModule),
  ],
  providers: [ChatService, ChatResolver],
  exports: [ChatService],
})
export class ChatModule {}
