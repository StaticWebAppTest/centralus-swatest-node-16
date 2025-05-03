module.exports = async function (context, req) {
  const date = "2025-05-03T16:14:14.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

