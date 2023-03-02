import { useLocation, useParams } from "react-router-dom";

function SearchPage() {
  const { testValue } = useParams();
  const { search } = useLocation();
  console.log(testValue, search);

  return (
    <div>
      <br />
      <br />
      <br />
      <span>
        {testValue} {search}
      </span>
    </div>
  );
}

export default SearchPage;
