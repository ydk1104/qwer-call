import { useRef, useState } from "react";

interface 음절 {
  가사: string;
  응원: string;
  박자: number;
  시간: number;
}

interface 데이터 {
  소절: 음절[];
  시작시간: number;
}

const A = ({ 음절 }: { 음절: 음절 }) => {
  return (
    <div className="flex-col">
      <div>{음절.가사}/</div>
      <div>{음절.응원}/</div>
      <div>{음절.박자}/</div>
    </div>
  );
};

export const Viewer = ({ data }: { data: 데이터[] }) => {
  return (
    <div className="flex-col">
      {data.map((v, i) => (
        <div key={`${v.시작시간}${i}`} className="flex">
          {v.소절.map((w) => (
            <A 음절={w} key={`${w.시간}${w.박자}`}></A>
          ))}
        </div>
      ))}
    </div>
  );
};

const AtoB = (data: 데이터[]): string => {
  let ret = "";
  data.forEach((소절) => {
    ret = ret + "\\";
    소절.소절.forEach((음절) => {
      ret = ret + `${음절.가사}${음절.응원}$${음절.박자}`;
    });
  });

  return ret;
};
const BtoA = (악보: string): 데이터[] => {
  const getData = () => {
    let time = 0;
    return 악보.split("\\").map((소절) => {
      const reg = /(.)(.)\$([0-9]*)/g;
      const ret = [];
      let match;
      while ((match = reg.exec(소절)) != null) {
        ret.push({
          가사: match[1],
          응원: match[2],
          박자: +match[3],
          시간: time,
        });
        time += (+match[3] * 30) / 178;
      }
      if (ret.length == 0) return { 소절: [], 시작시간: 1e9 };
      return { 소절: ret, 시작시간: ret[0].시간 };
    });
  };
  return getData();
};

const saveTemplateAsFile = (dataObjToWrite: object) => {
  const blob = new Blob([JSON.stringify(dataObjToWrite)], {
    type: "text/json",
  });
  const link = document.createElement("a");

  link.download = "TBH.json";
  link.href = window.URL.createObjectURL(blob);
  link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");

  const evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  link.dispatchEvent(evt);
  link.remove();
};

export const Editor = ({ data: initdata }: { data: 데이터[] }) => {
  const [data, setData] = useState(initdata);
  const inputref = useRef<HTMLTextAreaElement>(null);
  console.log(inputref);
  return (
    <div className="flex">
      <textarea ref={inputref} id="story" name="story" rows={5} cols={33}>
        {AtoB(data)}
      </textarea>
      <button
        onClick={() => setData(initdata)}
        className="self-start cursor-pointer"
      >
        적용
      </button>
      <button
        onClick={() => {
          saveTemplateAsFile(BtoA(inputref.current?.value ?? ""));
        }}
        className="self-start cursor-pointer"
      >
        저장
      </button>
      <Viewer data={initdata}></Viewer>
    </div>
  );
};
