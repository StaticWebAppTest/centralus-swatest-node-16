module.exports = async function (context, req) {
  const date = "2022-11-24T02:33:19.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

