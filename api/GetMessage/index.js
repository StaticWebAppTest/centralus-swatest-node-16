module.exports = async function (context, req) {
  const date = "2023-04-17T14:08:38.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

