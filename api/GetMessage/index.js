module.exports = async function (context, req) {
  const date = "2024-12-23T05:12:17.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

