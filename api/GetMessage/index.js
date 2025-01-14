module.exports = async function (context, req) {
  const date = "2025-01-14T15:11:36.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

