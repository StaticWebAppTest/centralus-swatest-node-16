module.exports = async function (context, req) {
  const date = "2025-03-05T19:10:05.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

