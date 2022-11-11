module.exports = async function (context, req) {
  const date = "2022-11-11T03:22:29.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

