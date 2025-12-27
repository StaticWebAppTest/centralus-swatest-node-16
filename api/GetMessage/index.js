module.exports = async function (context, req) {
  const date = "2025-12-27T16:16:37.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

