module.exports = async function (context, req) {
  const date = "2025-01-10T10:12:57.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

