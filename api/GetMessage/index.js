module.exports = async function (context, req) {
  const date = "2023-08-31T23:08:34.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

