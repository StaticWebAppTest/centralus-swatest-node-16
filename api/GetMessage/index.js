module.exports = async function (context, req) {
  const date = "2023-04-17T02:00:59.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

