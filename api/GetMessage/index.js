module.exports = async function (context, req) {
  const date = "2024-11-09T15:11:41.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

