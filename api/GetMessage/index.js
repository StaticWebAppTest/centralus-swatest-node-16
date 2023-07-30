module.exports = async function (context, req) {
  const date = "2023-07-30T01:58:00.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

