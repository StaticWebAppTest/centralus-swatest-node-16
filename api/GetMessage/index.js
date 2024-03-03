module.exports = async function (context, req) {
  const date = "2024-03-03T07:07:29.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

