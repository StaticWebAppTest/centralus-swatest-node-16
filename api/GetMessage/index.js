module.exports = async function (context, req) {
  const date = "2025-02-22T19:09:00.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

