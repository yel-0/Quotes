import axios from "axios";
import { useQuery } from "react-query";

function Quotes() {
  const { data, isLoading, isError } = useQuery("quotes", async () => {
    return axios.get("https://type.fit/api/quotes").then((res) => res.data);
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <div class="lds-default ">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      {data.map((i) => {
        return (
          <div
            className="scroll-area p-[2rem] h-screen text-3xl flex flex-row justify-center items-center text-white text-center"
            key={i.id}
          >
            {i.text}
          </div>
        );
      })}
    </>
  );
}

export default Quotes;
