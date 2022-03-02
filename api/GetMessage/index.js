module.exports = async function (context, req) {
  const date = "2022-03-02T00:43:21.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

