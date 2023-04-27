module.exports = async function (context, req) {
  const date = "2023-04-27T22:07:33.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

