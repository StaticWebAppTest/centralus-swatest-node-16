module.exports = async function (context, req) {
  const date = "2022-04-08T16:14:25.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

