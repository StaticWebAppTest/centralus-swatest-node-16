module.exports = async function (context, req) {
  const date = "2024-12-05T02:58:52.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

