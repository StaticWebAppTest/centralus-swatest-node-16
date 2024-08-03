module.exports = async function (context, req) {
  const date = "2024-08-03T21:09:43.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

