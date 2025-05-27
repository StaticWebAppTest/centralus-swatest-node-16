module.exports = async function (context, req) {
  const date = "2025-05-27T19:10:26.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

