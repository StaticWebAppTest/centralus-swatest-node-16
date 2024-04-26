module.exports = async function (context, req) {
  const date = "2024-04-26T12:17:01.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

