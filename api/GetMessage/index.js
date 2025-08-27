module.exports = async function (context, req) {
  const date = "2025-08-27T09:14:12.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

