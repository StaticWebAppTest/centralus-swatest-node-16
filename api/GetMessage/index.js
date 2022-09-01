module.exports = async function (context, req) {
  const date = "2022-09-01T21:10:56.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

