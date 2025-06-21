module.exports = async function (context, req) {
  const date = "2025-06-21T15:12:26.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

