module.exports = async function (context, req) {
  const date = "2024-12-22T05:10:41.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

