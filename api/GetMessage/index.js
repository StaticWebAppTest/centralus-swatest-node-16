module.exports = async function (context, req) {
  const date = "2024-05-09T22:08:33.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

