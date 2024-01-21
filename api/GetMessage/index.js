module.exports = async function (context, req) {
  const date = "2024-01-21T16:10:46.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

