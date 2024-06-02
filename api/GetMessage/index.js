module.exports = async function (context, req) {
  const date = "2024-06-02T01:58:19.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

