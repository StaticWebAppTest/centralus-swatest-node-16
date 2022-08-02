module.exports = async function (context, req) {
  const date = "2022-08-02T06:14:11.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

