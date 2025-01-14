module.exports = async function (context, req) {
  const date = "2025-01-14T11:09:32.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

