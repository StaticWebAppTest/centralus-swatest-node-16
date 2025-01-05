module.exports = async function (context, req) {
  const date = "2025-01-05T05:10:54.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

