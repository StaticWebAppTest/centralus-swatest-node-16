module.exports = async function (context, req) {
  const date = "2024-04-07T22:07:54.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

