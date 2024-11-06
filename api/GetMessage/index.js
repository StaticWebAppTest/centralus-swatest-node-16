module.exports = async function (context, req) {
  const date = "2024-11-06T18:15:21.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

