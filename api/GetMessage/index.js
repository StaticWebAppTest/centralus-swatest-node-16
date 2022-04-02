module.exports = async function (context, req) {
  const date = "2022-04-02T00:44:44.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

