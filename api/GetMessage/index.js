module.exports = async function (context, req) {
  const date = "2023-10-02T01:43:49.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

