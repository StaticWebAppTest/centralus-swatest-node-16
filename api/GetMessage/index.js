module.exports = async function (context, req) {
  const date = "2024-08-14T20:11:15.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

