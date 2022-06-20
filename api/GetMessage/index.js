module.exports = async function (context, req) {
  const date = "2022-06-20T03:41:47.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

