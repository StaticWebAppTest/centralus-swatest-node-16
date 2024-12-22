module.exports = async function (context, req) {
  const date = "2024-12-22T09:10:46.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

