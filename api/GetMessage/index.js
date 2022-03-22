module.exports = async function (context, req) {
  const date = "2022-03-22T10:10:58.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

