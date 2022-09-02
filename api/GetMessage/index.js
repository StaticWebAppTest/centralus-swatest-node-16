module.exports = async function (context, req) {
  const date = "2022-09-02T19:08:38.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

