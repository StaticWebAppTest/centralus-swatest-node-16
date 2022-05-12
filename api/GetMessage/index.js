module.exports = async function (context, req) {
  const date = "2022-05-12T10:13:51.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

