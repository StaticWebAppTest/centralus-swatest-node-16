module.exports = async function (context, req) {
  const date = "2022-11-01T20:13:43.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

