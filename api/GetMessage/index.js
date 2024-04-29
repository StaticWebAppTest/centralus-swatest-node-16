module.exports = async function (context, req) {
  const date = "2024-04-29T10:10:52.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

