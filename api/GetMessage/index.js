module.exports = async function (context, req) {
  const date = "2024-06-16T16:11:17.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

