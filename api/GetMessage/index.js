module.exports = async function (context, req) {
  const date = "2023-12-26T23:10:22.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

