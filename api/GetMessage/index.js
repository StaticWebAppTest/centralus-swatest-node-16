module.exports = async function (context, req) {
  const date = "2022-11-17T12:22:26.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

