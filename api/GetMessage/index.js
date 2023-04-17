module.exports = async function (context, req) {
  const date = "2023-04-17T05:08:53.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

