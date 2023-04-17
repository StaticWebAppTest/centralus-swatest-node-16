module.exports = async function (context, req) {
  const date = "2023-04-17T12:18:13.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

