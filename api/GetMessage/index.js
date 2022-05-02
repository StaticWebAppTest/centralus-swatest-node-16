module.exports = async function (context, req) {
  const date = "2022-05-02T23:11:51.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

