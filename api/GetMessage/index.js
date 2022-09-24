module.exports = async function (context, req) {
  const date = "2022-09-24T16:15:24.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

