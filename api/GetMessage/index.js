module.exports = async function (context, req) {
  const date = "2025-02-05T09:12:53.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

