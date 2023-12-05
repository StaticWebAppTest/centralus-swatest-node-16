module.exports = async function (context, req) {
  const date = "2023-12-05T22:08:44.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

