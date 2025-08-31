module.exports = async function (context, req) {
  const date = "2025-08-31T12:23:34.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

