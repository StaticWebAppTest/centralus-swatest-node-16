module.exports = async function (context, req) {
  const date = "2023-08-16T20:08:47.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

