module.exports = async function (context, req) {
  const date = "2025-01-14T16:13:53.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

