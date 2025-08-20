module.exports = async function (context, req) {
  const date = "2025-08-20T01:04:01.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

