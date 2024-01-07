module.exports = async function (context, req) {
  const date = "2024-01-07T00:48:57.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

