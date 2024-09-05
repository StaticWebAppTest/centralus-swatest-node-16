module.exports = async function (context, req) {
  const date = "2024-09-05T02:07:30.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

