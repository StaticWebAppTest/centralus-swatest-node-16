module.exports = async function (context, req) {
  const date = "2025-01-22T21:09:01.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

