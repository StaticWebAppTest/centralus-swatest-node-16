module.exports = async function (context, req) {
  const date = "2025-02-05T04:14:24.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

