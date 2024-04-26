module.exports = async function (context, req) {
  const date = "2024-04-26T04:11:12.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

