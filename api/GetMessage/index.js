module.exports = async function (context, req) {
  const date = "2023-10-04T12:17:51.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

