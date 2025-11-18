module.exports = async function (context, req) {
  const date = "2025-11-18T16:18:47.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

