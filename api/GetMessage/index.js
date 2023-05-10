module.exports = async function (context, req) {
  const date = "2023-05-10T22:10:29.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

