module.exports = async function (context, req) {
  const date = "2022-04-01T23:10:46.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

