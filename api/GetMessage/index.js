module.exports = async function (context, req) {
  const date = "2025-06-05T10:15:19.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

