module.exports = async function (context, req) {
  const date = "2023-01-30T04:11:41.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

