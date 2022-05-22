module.exports = async function (context, req) {
  const date = "2022-05-22T17:14:17.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

