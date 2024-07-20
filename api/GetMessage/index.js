module.exports = async function (context, req) {
  const date = "2024-07-20T16:11:43.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

