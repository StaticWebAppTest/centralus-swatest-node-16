module.exports = async function (context, req) {
  const date = "2023-10-12T00:39:16.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

