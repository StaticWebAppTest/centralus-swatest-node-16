module.exports = async function (context, req) {
  const date = "2023-08-18T15:08:24.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

