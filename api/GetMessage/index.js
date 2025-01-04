module.exports = async function (context, req) {
  const date = "2025-01-04T14:09:37.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

