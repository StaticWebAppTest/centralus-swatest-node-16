module.exports = async function (context, req) {
  const date = "2024-04-06T20:10:40.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

