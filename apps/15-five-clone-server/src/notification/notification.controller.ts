import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationService } from "./notification.service";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController {
  constructor(protected readonly service: NotificationService) {}
}
