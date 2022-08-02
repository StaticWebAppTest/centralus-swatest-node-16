module.exports = async function (context, req) {
  const date = "2022-08-02T21:10:13.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

