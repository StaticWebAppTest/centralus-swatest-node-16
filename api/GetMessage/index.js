module.exports = async function (context, req) {
  const date = "2024-06-29T21:09:29.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

