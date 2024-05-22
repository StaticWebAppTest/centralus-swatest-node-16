module.exports = async function (context, req) {
  const date = "2024-05-22T04:11:58.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

