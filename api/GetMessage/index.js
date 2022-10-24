module.exports = async function (context, req) {
  const date = "2022-10-24T15:18:29.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

