module.exports = async function (context, req) {
  const date = "2025-04-28T08:40:56.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

