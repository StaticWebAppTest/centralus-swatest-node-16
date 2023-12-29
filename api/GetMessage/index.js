module.exports = async function (context, req) {
  const date = "2023-12-29T19:07:07.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

