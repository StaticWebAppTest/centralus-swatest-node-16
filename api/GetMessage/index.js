module.exports = async function (context, req) {
  const date = "2022-12-22T02:07:58.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

