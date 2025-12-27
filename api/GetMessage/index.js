module.exports = async function (context, req) {
  const date = "2025-12-27T22:13:16.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

