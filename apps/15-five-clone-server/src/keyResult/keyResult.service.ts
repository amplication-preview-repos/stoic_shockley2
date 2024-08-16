import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyResultServiceBase } from "./base/keyResult.service.base";

@Injectable()
export class KeyResultService extends KeyResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
