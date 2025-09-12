module.exports = async function (context, req) {
  const date = "2025-09-12T13:20:21.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

