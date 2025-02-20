module.exports = async function (context, req) {
  const date = "2025-02-20T22:11:17.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

