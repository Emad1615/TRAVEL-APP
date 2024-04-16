import { useEffect, useState } from "react";
import { clockFormat } from "../util/helper";

function Clock() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    const Id = setInterval(() => {
      setDate(new Date());
    }, [1000]);
    return () => clearInterval(Id);
  }, []);
  return (
    <label className="border py-2 px-3 border-slate-500 rounded my-2 inline-block mx-2 font-semibold text-sm text-white bg-slate-600 shadow-2xl">
      {clockFormat(date)}
    </label>
  );
}

export default Clock;
