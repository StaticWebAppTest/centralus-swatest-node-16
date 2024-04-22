module.exports = async function (context, req) {
  const date = "2024-04-22T19:08:49.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

