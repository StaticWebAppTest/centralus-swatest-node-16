module.exports = async function (context, req) {
  const date = "2022-11-02T23:11:48.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

