module.exports = async function (context, req) {
  const date = "2025-03-05T03:20:59.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

