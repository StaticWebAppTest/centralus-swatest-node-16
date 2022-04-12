module.exports = async function (context, req) {
  const date = "2022-04-12T03:28:58.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

