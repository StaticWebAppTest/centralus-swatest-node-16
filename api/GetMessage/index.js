module.exports = async function (context, req) {
  const date = "2025-12-31T04:33:27.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

