module.exports = async function (context, req) {
  const date = "2024-05-22T05:11:17.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

