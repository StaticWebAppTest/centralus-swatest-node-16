module.exports = async function (context, req) {
  const date = "2022-11-15T22:10:28.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

