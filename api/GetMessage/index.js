module.exports = async function (context, req) {
  const date = "2022-08-02T20:12:51.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

