module.exports = async function (context, req) {
  const date = "2024-05-16T05:10:37.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

