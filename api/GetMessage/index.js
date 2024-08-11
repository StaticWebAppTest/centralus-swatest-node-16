module.exports = async function (context, req) {
  const date = "2024-08-11T04:13:11.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

