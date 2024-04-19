module.exports = async function (context, req) {
  const date = "2024-04-19T12:16:42.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

