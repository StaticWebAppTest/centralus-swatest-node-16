module.exports = async function (context, req) {
  const date = "2024-03-14T05:08:41.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

