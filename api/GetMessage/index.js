module.exports = async function (context, req) {
  const date = "2024-06-08T19:08:16.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

