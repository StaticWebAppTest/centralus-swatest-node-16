module.exports = async function (context, req) {
  const date = "2024-03-31T20:09:58.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

