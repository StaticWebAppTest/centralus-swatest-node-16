module.exports = async function (context, req) {
  const date = "2022-07-02T19:08:04.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

