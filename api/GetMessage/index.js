module.exports = async function (context, req) {
  const date = "2025-04-04T17:11:29.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

