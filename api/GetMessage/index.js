module.exports = async function (context, req) {
  const date = "2023-06-01T18:11:43.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

