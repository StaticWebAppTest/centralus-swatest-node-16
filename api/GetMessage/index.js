module.exports = async function (context, req) {
  const date = "2023-12-05T09:09:53.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

