import AppLoading from "../../common/app-loading";
import {LoadingContext} from "../../../context/loading";


export default function SearchLoading() {
  const loadingContext = LoadingContext();

  if (!loadingContext.isLoading) return <></>;

  return (
    <div className="my-3">
      <AppLoading isSmall/>
    </div>
  );
}