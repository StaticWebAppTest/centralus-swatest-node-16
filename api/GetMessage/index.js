module.exports = async function (context, req) {
  const date = "2025-05-12T03:09:45.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

