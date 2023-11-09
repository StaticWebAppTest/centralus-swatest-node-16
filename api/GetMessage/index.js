module.exports = async function (context, req) {
  const date = "2023-11-09T21:07:55.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

