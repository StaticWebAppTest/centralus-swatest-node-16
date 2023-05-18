module.exports = async function (context, req) {
  const date = "2023-05-18T03:09:12.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

