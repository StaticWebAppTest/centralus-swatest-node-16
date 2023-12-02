module.exports = async function (context, req) {
  const date = "2023-12-02T07:07:48.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

