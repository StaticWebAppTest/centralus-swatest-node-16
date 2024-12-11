module.exports = async function (context, req) {
  const date = "2024-12-11T10:13:49.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

