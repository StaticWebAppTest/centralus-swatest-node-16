module.exports = async function (context, req) {
  const date = "2023-06-27T02:55:16.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

