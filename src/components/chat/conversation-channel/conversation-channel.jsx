/** @format */

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Tab from "./tab";
import RoomList from "./room-list";
import socket from "../../../socket";
import { TABS } from "../../../utils/app";
import InputSearch from "./input-search";
import ProviderList from "./provider-list";
import SearchLoading from "./search-loading";
import userStorage from "../../../store/local/user";
import LoadingProvider from "../../../context/loading";

export default function ConversationChannel() {
  const user = userStorage.getUser();
  const tabs = useSelector((state) => state.tab);

  useEffect(() => {
    socket.on("msg-from-server", (data) => {
      console.log("msg from server: ", data);
    });
  }, []);

  return (
    <div id="discussions" className="tab-pane fade active show">
      <LoadingProvider>
        <InputSearch />
        <div className="list-group sort">
          <Tab
            title="All Chats"
            tabName={TABS.chat}
            currentTab={tabs.currentTab}
          />
          {user && !user.isProvider && (
            <Tab
              title="Providers"
              tabName={TABS.provider}
              currentTab={tabs.currentTab}
            />
          )}
        </div>
        <div className="discussions">
          <h1>{tabs.currentTab === TABS.chat ? "Discussions" : "Providers"}</h1>
          <SearchLoading />
          <div className="list-group" id="chats" role="tablist">
            {tabs.currentTab === TABS.chat ? <RoomList /> : <ProviderList />}
          </div>
        </div>
      </LoadingProvider>
    </div>
  );
}
