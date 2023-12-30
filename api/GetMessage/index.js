module.exports = async function (context, req) {
  const date = "2023-12-30T05:08:26.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

