module.exports = async function (context, req) {
  const date = "2023-12-02T01:43:41.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

