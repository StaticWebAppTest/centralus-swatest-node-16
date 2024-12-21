module.exports = async function (context, req) {
  const date = "2024-12-21T10:10:49.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

