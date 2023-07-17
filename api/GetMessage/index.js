module.exports = async function (context, req) {
  const date = "2023-07-17T04:12:22.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

