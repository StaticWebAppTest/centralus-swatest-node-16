module.exports = async function (context, req) {
  const date = "2024-12-02T22:11:49.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

