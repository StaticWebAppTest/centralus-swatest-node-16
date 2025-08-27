module.exports = async function (context, req) {
  const date = "2025-08-27T21:11:58.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

