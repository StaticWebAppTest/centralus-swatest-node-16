module.exports = async function (context, req) {
  const date = "2023-09-26T01:43:27.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

