module.exports = async function (context, req) {
  const date = "2025-01-06T16:14:12.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

