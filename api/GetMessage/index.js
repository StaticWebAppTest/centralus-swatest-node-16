module.exports = async function (context, req) {
  const date = "2022-11-14T02:59:33.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

