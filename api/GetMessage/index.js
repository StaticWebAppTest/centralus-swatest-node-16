module.exports = async function (context, req) {
  const date = "2023-11-22T04:11:37.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

