module.exports = async function (context, req) {
  const date = "2024-03-29T22:09:04.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

