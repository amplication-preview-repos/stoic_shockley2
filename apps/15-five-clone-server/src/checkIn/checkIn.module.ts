import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CheckInModuleBase } from "./base/checkIn.module.base";
import { CheckInService } from "./checkIn.service";
import { CheckInController } from "./checkIn.controller";
import { CheckInResolver } from "./checkIn.resolver";

@Module({
  imports: [CheckInModuleBase, forwardRef(() => AuthModule)],
  controllers: [CheckInController],
  providers: [CheckInService, CheckInResolver],
  exports: [CheckInService],
})
export class CheckInModule {}
