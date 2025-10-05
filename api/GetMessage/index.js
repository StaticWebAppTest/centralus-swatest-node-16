module.exports = async function (context, req) {
  const date = "2025-10-05T17:09:38.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

