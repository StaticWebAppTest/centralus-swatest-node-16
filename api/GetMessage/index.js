module.exports = async function (context, req) {
  const date = "2025-01-01T07:11:31.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

