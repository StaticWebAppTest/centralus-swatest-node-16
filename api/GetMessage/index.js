module.exports = async function (context, req) {
  const date = "2024-12-20T20:12:38.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

