module.exports = async function (context, req) {
  const date = "2022-12-02T03:14:58.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

