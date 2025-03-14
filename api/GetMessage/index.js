module.exports = async function (context, req) {
  const date = "2025-03-14T13:19:46.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

