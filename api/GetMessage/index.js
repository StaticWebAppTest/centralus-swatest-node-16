module.exports = async function (context, req) {
  const date = "2023-08-10T20:08:37.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

