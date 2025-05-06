module.exports = async function (context, req) {
  const date = "2025-05-06T08:18:32.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

