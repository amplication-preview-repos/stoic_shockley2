/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CheckIn as PrismaCheckIn,
  User as PrismaUser,
} from "@prisma/client";

export class CheckInServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CheckInCountArgs, "select">): Promise<number> {
    return this.prisma.checkIn.count(args);
  }

  async checkIns(args: Prisma.CheckInFindManyArgs): Promise<PrismaCheckIn[]> {
    return this.prisma.checkIn.findMany(args);
  }
  async checkIn(
    args: Prisma.CheckInFindUniqueArgs
  ): Promise<PrismaCheckIn | null> {
    return this.prisma.checkIn.findUnique(args);
  }
  async createCheckIn(args: Prisma.CheckInCreateArgs): Promise<PrismaCheckIn> {
    return this.prisma.checkIn.create(args);
  }
  async updateCheckIn(args: Prisma.CheckInUpdateArgs): Promise<PrismaCheckIn> {
    return this.prisma.checkIn.update(args);
  }
  async deleteCheckIn(args: Prisma.CheckInDeleteArgs): Promise<PrismaCheckIn> {
    return this.prisma.checkIn.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.checkIn
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
