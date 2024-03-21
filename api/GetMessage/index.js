module.exports = async function (context, req) {
  const date = "2024-03-21T00:42:48.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

