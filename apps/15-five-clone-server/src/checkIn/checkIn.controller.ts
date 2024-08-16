import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CheckInService } from "./checkIn.service";
import { CheckInControllerBase } from "./base/checkIn.controller.base";

@swagger.ApiTags("checkIns")
@common.Controller("checkIns")
export class CheckInController extends CheckInControllerBase {
  constructor(
    protected readonly service: CheckInService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
