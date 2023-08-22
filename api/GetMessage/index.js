module.exports = async function (context, req) {
  const date = "2023-08-22T20:08:48.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

