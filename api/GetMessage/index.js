module.exports = async function (context, req) {
  const date = "2024-01-07T02:28:37.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

