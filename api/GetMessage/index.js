module.exports = async function (context, req) {
  const date = "2025-02-22T22:10:02.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

