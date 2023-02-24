module.exports = async function (context, req) {
  const date = "2023-02-24T00:53:17.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

