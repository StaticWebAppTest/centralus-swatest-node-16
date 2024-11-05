module.exports = async function (context, req) {
  const date = "2024-11-05T06:16:29.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

