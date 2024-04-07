module.exports = async function (context, req) {
  const date = "2024-04-07T14:08:32.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

