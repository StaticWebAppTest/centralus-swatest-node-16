module.exports = async function (context, req) {
  const date = "2023-10-13T01:48:31.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

