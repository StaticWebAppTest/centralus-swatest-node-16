module.exports = async function (context, req) {
  const date = "2024-11-15T09:12:58.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

