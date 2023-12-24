module.exports = async function (context, req) {
  const date = "2023-12-24T02:22:55.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

