import ReactMarkdown from "react-markdown";

export const A = ({ data }: { data: string[] }) => {
  if (!data || data.length <= 2) return <></>;
  return (
    <div className="w-full flex text-xl">
      <div className="w-1/3">
        <ReactMarkdown
          components={{
            strong(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { node, ...rest } = props;
              return <strong style={{ color: "#f44" }} {...rest} />;
            },
          }}
        >
          {data[0]}
        </ReactMarkdown>
      </div>
      <div className="w-1/3">
        <ReactMarkdown
          components={{
            strong(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { node, ...rest } = props;
              return <strong style={{ color: "#f44" }} {...rest} />;
            },
          }}
        >
          {data[1]}
        </ReactMarkdown>
      </div>
      <div className="w-1/3">
        <ReactMarkdown
          components={{
            strong(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { node, ...rest } = props;
              return <strong style={{ color: "#f44" }} {...rest} />;
            },
          }}
        >
          {data[2]}
        </ReactMarkdown>
      </div>
    </div>
  );
};
