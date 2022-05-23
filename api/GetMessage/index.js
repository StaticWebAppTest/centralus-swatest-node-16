module.exports = async function (context, req) {
  const date = "2022-05-23T19:08:46.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

