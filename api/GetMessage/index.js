module.exports = async function (context, req) {
  const date = "2024-01-26T01:43:21.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

