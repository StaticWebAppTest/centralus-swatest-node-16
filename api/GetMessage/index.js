module.exports = async function (context, req) {
  const date = "2022-12-24T09:08:29.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

