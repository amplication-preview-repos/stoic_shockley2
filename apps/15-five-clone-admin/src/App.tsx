import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ObjectiveList } from "./objective/ObjectiveList";
import { ObjectiveCreate } from "./objective/ObjectiveCreate";
import { ObjectiveEdit } from "./objective/ObjectiveEdit";
import { ObjectiveShow } from "./objective/ObjectiveShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { KeyResultList } from "./keyResult/KeyResultList";
import { KeyResultCreate } from "./keyResult/KeyResultCreate";
import { KeyResultEdit } from "./keyResult/KeyResultEdit";
import { KeyResultShow } from "./keyResult/KeyResultShow";
import { CheckInList } from "./checkIn/CheckInList";
import { CheckInCreate } from "./checkIn/CheckInCreate";
import { CheckInEdit } from "./checkIn/CheckInEdit";
import { CheckInShow } from "./checkIn/CheckInShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"15fiveClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Objective"
          list={ObjectiveList}
          edit={ObjectiveEdit}
          create={ObjectiveCreate}
          show={ObjectiveShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="KeyResult"
          list={KeyResultList}
          edit={KeyResultEdit}
          create={KeyResultCreate}
          show={KeyResultShow}
        />
        <Resource
          name="CheckIn"
          list={CheckInList}
          edit={CheckInEdit}
          create={CheckInCreate}
          show={CheckInShow}
        />
      </Admin>
    </div>
  );
};

export default App;
