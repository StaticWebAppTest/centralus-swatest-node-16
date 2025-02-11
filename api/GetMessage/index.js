module.exports = async function (context, req) {
  const date = "2025-02-11T12:23:00.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

