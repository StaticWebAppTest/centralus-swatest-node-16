module.exports = async function (context, req) {
  const date = "2024-04-22T03:10:37.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

