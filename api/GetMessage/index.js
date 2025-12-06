module.exports = async function (context, req) {
  const date = "2025-12-06T23:12:35.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

