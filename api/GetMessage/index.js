module.exports = async function (context, req) {
  const date = "2023-05-01T12:16:18.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

