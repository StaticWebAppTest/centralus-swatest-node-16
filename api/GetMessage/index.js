module.exports = async function (context, req) {
  const date = "2022-12-22T22:08:48.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

