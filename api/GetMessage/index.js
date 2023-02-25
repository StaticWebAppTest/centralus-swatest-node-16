module.exports = async function (context, req) {
  const date = "2023-02-25T22:08:59.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

