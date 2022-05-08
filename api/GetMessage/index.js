module.exports = async function (context, req) {
  const date = "2022-05-08T12:17:59.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

