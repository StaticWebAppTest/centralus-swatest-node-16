module.exports = async function (context, req) {
  const date = "2022-11-03T17:16:29.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

