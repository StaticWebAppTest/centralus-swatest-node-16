module.exports = async function (context, req) {
  const date = "2024-02-02T01:41:30.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

