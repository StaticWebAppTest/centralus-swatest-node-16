module.exports = async function (context, req) {
  const date = "2023-11-29T17:08:33.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

