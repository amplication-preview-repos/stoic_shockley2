import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckInServiceBase } from "./base/checkIn.service.base";

@Injectable()
export class CheckInService extends CheckInServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
