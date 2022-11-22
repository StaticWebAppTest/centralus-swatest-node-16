module.exports = async function (context, req) {
  const date = "2022-11-22T08:15:26.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

