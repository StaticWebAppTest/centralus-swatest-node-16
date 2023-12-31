module.exports = async function (context, req) {
  const date = "2023-12-31T05:08:29.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

