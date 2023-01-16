module.exports = async function (context, req) {
  const date = "2023-01-16T16:12:46.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

