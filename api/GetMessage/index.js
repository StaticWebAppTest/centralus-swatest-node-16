module.exports = async function (context, req) {
  const date = "2025-11-27T15:14:22.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

