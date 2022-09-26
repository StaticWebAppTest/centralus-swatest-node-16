module.exports = async function (context, req) {
  const date = "2022-09-26T06:05:07.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

