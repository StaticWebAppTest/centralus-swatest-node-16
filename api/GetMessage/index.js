module.exports = async function (context, req) {
  const date = "2024-03-30T16:11:31.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

