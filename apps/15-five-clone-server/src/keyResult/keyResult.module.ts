import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KeyResultModuleBase } from "./base/keyResult.module.base";
import { KeyResultService } from "./keyResult.service";
import { KeyResultController } from "./keyResult.controller";
import { KeyResultResolver } from "./keyResult.resolver";

@Module({
  imports: [KeyResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [KeyResultController],
  providers: [KeyResultService, KeyResultResolver],
  exports: [KeyResultService],
})
export class KeyResultModule {}
