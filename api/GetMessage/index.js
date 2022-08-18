module.exports = async function (context, req) {
  const date = "2022-08-18T19:09:31.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

