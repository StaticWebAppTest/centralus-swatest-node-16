module.exports = async function (context, req) {
  const date = "2024-06-21T00:46:29.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

