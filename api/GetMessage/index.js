module.exports = async function (context, req) {
  const date = "2024-12-05T05:12:56.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

