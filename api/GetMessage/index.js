module.exports = async function (context, req) {
  const date = "2025-01-05T06:15:41.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

