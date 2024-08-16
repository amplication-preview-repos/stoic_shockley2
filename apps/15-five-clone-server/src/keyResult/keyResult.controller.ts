import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KeyResultService } from "./keyResult.service";
import { KeyResultControllerBase } from "./base/keyResult.controller.base";

@swagger.ApiTags("keyResults")
@common.Controller("keyResults")
export class KeyResultController extends KeyResultControllerBase {
  constructor(
    protected readonly service: KeyResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
