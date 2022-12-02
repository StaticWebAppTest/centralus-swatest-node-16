module.exports = async function (context, req) {
  const date = "2022-12-02T23:09:36.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

