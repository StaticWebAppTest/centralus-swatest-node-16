module.exports = async function (context, req) {
  const date = "2024-09-22T15:10:22.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

