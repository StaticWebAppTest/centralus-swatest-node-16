module.exports = async function (context, req) {
  const date = "2022-11-15T03:42:32.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

