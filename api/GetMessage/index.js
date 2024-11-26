module.exports = async function (context, req) {
  const date = "2024-11-26T15:13:15.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

