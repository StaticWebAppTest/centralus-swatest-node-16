module.exports = async function (context, req) {
  const date = "2024-05-12T12:17:52.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

