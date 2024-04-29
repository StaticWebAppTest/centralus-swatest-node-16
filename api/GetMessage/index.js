module.exports = async function (context, req) {
  const date = "2024-04-29T23:08:52.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

