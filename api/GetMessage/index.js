module.exports = async function (context, req) {
  const date = "2025-12-15T17:19:54.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

