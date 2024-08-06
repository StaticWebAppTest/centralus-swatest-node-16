module.exports = async function (context, req) {
  const date = "2024-08-06T16:13:17.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

