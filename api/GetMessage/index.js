module.exports = async function (context, req) {
  const date = "2024-07-07T12:17:25.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

