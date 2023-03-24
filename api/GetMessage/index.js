module.exports = async function (context, req) {
  const date = "2023-03-24T00:48:19.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

