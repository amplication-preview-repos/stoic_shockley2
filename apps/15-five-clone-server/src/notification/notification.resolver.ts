import * as graphql from "@nestjs/graphql";
import { NotificationService } from "./notification.service";

export class NotificationResolver {
  constructor(protected readonly service: NotificationService) {}
}
