module.exports = async function (context, req) {
  const date = "2022-11-02T10:13:29.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

