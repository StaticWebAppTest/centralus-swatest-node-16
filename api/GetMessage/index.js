module.exports = async function (context, req) {
  const date = "2023-12-09T10:08:43.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

