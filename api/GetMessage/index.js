module.exports = async function (context, req) {
  const date = "2023-04-05T00:39:11.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

