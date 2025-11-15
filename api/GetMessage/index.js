module.exports = async function (context, req) {
  const date = "2025-11-15T01:04:24.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

