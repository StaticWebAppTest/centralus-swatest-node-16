module.exports = async function (context, req) {
  const date = "2023-09-22T04:10:35.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

