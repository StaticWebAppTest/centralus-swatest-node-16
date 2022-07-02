module.exports = async function (context, req) {
  const date = "2022-07-02T12:17:06.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

