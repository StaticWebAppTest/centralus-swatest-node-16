module.exports = async function (context, req) {
  const date = "2024-03-26T04:10:51.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

