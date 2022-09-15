module.exports = async function (context, req) {
  const date = "2022-09-15T20:12:59.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

