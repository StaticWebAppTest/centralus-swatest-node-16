module.exports = async function (context, req) {
  const date = "2025-01-16T19:08:51.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

