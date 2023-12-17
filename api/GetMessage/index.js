module.exports = async function (context, req) {
  const date = "2023-12-17T22:08:02.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

