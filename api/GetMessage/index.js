module.exports = async function (context, req) {
  const date = "2023-05-22T13:11:41.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

