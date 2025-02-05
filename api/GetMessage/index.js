module.exports = async function (context, req) {
  const date = "2025-02-05T21:10:59.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

