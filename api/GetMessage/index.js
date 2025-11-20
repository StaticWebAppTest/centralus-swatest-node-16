module.exports = async function (context, req) {
  const date = "2025-11-20T15:14:20.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

