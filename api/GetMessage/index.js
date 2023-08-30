module.exports = async function (context, req) {
  const date = "2023-08-30T21:08:44.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

