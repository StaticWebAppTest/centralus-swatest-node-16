module.exports = async function (context, req) {
  const date = "2025-06-27T19:10:18.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

