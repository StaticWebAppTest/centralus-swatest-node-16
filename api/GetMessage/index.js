module.exports = async function (context, req) {
  const date = "2022-06-02T16:16:17.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

