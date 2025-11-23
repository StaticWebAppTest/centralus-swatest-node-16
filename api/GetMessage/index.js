module.exports = async function (context, req) {
  const date = "2025-11-23T23:12:24.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

