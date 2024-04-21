module.exports = async function (context, req) {
  const date = "2024-04-21T02:21:12.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

