module.exports = async function (context, req) {
  const date = "2023-11-01T02:20:37.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

