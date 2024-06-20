module.exports = async function (context, req) {
  const date = "2024-06-20T01:54:33.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

