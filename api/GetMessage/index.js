module.exports = async function (context, req) {
  const date = "2025-02-05T03:15:21.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

