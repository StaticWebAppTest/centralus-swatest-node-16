module.exports = async function (context, req) {
  const date = "2022-11-03T08:17:34.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

