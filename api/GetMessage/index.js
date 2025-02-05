module.exports = async function (context, req) {
  const date = "2025-02-05T02:12:43.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

