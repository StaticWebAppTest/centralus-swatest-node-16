module.exports = async function (context, req) {
  const date = "2022-09-12T07:34:11.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

