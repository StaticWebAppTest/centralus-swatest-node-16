module.exports = async function (context, req) {
  const date = "2025-01-25T18:13:55.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

