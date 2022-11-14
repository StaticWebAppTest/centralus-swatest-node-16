module.exports = async function (context, req) {
  const date = "2022-11-14T00:58:43.742Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

