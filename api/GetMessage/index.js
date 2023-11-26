module.exports = async function (context, req) {
  const date = "2023-11-26T19:06:37.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

