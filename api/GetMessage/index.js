module.exports = async function (context, req) {
  const date = "2023-07-26T11:07:04.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

