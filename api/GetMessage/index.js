module.exports = async function (context, req) {
  const date = "2025-01-28T15:12:41.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

