module.exports = async function (context, req) {
  const date = "2025-07-14T12:29:29.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

