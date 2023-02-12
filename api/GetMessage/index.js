module.exports = async function (context, req) {
  const date = "2023-02-12T00:55:52.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

