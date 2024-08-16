import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CheckInController } from "../checkIn.controller";
import { CheckInService } from "../checkIn.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  checkInDate: new Date(),
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  id: "exampleId",
  summary: "exampleSummary",
  updatedAt: new Date(),
  weekEnding: new Date(),
};
const CREATE_RESULT = {
  checkInDate: new Date(),
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  id: "exampleId",
  summary: "exampleSummary",
  updatedAt: new Date(),
  weekEnding: new Date(),
};
const FIND_MANY_RESULT = [
  {
    checkInDate: new Date(),
    createdAt: new Date(),
    createdBy: "exampleCreatedBy",
    id: "exampleId",
    summary: "exampleSummary",
    updatedAt: new Date(),
    weekEnding: new Date(),
  },
];
const FIND_ONE_RESULT = {
  checkInDate: new Date(),
  createdAt: new Date(),
  createdBy: "exampleCreatedBy",
  id: "exampleId",
  summary: "exampleSummary",
  updatedAt: new Date(),
  weekEnding: new Date(),
};

const service = {
  createCheckIn() {
    return CREATE_RESULT;
  },
  checkIns: () => FIND_MANY_RESULT,
  checkIn: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CheckIn", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CheckInService,
          useValue: service,
        },
      ],
      controllers: [CheckInController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /checkIns", async () => {
    await request(app.getHttpServer())
      .post("/checkIns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInDate: CREATE_RESULT.checkInDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        weekEnding: CREATE_RESULT.weekEnding.toISOString(),
      });
  });

  test("GET /checkIns", async () => {
    await request(app.getHttpServer())
      .get("/checkIns")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          checkInDate: FIND_MANY_RESULT[0].checkInDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          weekEnding: FIND_MANY_RESULT[0].weekEnding.toISOString(),
        },
      ]);
  });

  test("GET /checkIns/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/checkIns"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /checkIns/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/checkIns"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        checkInDate: FIND_ONE_RESULT.checkInDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        weekEnding: FIND_ONE_RESULT.weekEnding.toISOString(),
      });
  });

  test("POST /checkIns existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/checkIns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        checkInDate: CREATE_RESULT.checkInDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        weekEnding: CREATE_RESULT.weekEnding.toISOString(),
      })
      .then(function () {
        agent
          .post("/checkIns")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
