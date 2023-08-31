module.exports = async function (context, req) {
  const date = "2023-08-31T05:08:17.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

