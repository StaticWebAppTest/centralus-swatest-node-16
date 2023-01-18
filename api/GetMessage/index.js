module.exports = async function (context, req) {
  const date = "2023-01-18T06:12:49.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

