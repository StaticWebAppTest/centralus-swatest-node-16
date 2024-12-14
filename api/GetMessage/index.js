module.exports = async function (context, req) {
  const date = "2024-12-14T18:15:29.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

