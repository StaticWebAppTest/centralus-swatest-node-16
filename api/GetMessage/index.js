module.exports = async function (context, req) {
  const date = "2022-12-31T23:08:38.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

