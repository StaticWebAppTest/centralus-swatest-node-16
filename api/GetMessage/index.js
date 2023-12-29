module.exports = async function (context, req) {
  const date = "2023-12-29T01:37:35.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

