module.exports = async function (context, req) {
  const date = "2022-04-25T19:08:39.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

