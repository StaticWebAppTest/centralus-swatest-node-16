module.exports = async function (context, req) {
  const date = "2022-09-22T10:13:19.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

