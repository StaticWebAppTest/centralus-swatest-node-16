module.exports = async function (context, req) {
  const date = "2024-08-27T04:15:41.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

