module.exports = async function (context, req) {
  const date = "2025-03-11T12:24:37.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

