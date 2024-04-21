module.exports = async function (context, req) {
  const date = "2024-04-21T22:09:12.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

