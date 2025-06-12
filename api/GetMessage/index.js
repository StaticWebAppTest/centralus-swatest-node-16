module.exports = async function (context, req) {
  const date = "2025-06-12T17:12:37.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

