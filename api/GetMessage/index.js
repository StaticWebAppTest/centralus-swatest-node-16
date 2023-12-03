module.exports = async function (context, req) {
  const date = "2023-12-03T12:15:41.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

