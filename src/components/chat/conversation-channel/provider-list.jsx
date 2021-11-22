import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilteredProviders, loadProviders} from "../../../store/provider";
import {createRoom} from "../../../store/room";
import socket from "../../../socket";
import AppLoading from "../../common/app-loading";

export default function ProviderList() {
  const dispatch = useDispatch();
  const providers = useSelector(getFilteredProviders);
  const isLoading = useSelector(state => state.provider.isLoading);

  useEffect(() => {
    dispatch(loadProviders());
    //  eslint-disable-next-line
  }, []);

  const handleSubscribe = (userId) => {
    dispatch(createRoom(socket, userId));
  };

  return (
    <div>
      {isLoading && <AppLoading/>}
      {!isLoading && providers.map(provider => (
        <SingleProvider key={provider.id} provider={provider} onSubscribe={handleSubscribe}/>
      ))}
    </div>
  );
}

function SingleProvider({provider, onSubscribe}) {
  return (
    <div>
      <span>{provider.user?.name}</span>
      <button
        type="button"
        className="btn "
        onClick={() => onSubscribe(provider.user.id)}
      >
        Subscribe
      </button>
    </div>
  );
}