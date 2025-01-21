module.exports = async function (context, req) {
  const date = "2025-01-21T08:15:22.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

