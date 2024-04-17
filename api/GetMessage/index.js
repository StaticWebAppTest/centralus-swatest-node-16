module.exports = async function (context, req) {
  const date = "2024-04-17T21:09:59.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

