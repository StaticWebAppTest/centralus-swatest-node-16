module.exports = async function (context, req) {
  const date = "2022-12-23T22:08:26.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

