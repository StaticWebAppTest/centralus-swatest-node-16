module.exports = async function (context, req) {
  const date = "2025-02-17T17:10:30.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

