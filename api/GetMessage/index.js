module.exports = async function (context, req) {
  const date = "2024-06-07T00:48:03.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

